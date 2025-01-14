# MonoRepo for publishing a combo of packages and applications aimed at web based multiplayer game development


## Applications
### API
Express for the API/Game Cooridinator/File Server.  Games __MUST__ register themsevlves with it

### Frontend
A Lit web component base for the frontend find/join game. Games __SHOULD__ register themselves with it (TBD).


## Libraries
### Api Client
Used by the frontend and games, potentially integratable into other things like stream overlays

### Display Components
Lit Webcomponents used to build the frontend and other things like it, provided for stream integration as well as reuse in both the games and frontend

### Internal Shared
Shared functionality and types that are only intended to be consumed by the games/frontend/api.  This __MUST__ only contain code that is applicable in both dom and server contentexts.

### Internal Server Shared
Shared server side only functionality for server and games.  This lib also includes express, so __MUST__ never be served up to the frontend.

### Shared
Publicly shared functionality and types that are intended to be consumed by the internal applications as well as external applications (eg custom OBS integrations)


# Game layout
Games should be implemented as a set of packages/artifacts that live inside of the `/games/` root directory.  These directories should contain a set of packages that implement (at a minimum) the game frontend artifact and the server route registration to serve those artifacts.  They __MAY__ also include packages to augment the API client (TBD) and Frontend (TBD), internally shared logic (eg for multiplayer server logic), and externally shared code/types/etc.

## Games Package structure

### Frontend Game Code
_Package Naming Convention: `@shieldmaidengames/${gameName}-game`_

This is the frontend "game" code. This can be whatever engine, but needs to have everything bundled into an index.html entry point that can be iframed in.  The main frontend _MUST_ supply any needed config to the game via an iframe property or callback (TBD).

This entry point must be made available via an `artifacts:copy:package` yarn command in the game's `package.json`, and the game's `project.json` (nx) definition _MUST_ include the `artifact` and `game` tags.  The copy command _MUST_ copy all required files to the server's artifact path (`/apps/server/artifacts/${gameName}).

### Server module
_Package Naming Convention: `@shieldmaidengames/${gameName}-server`_

This is the package responsible for registering the game's routing with the server.  For multiplayer games where a websocket server is started for the instance, that code __SHOULD__ also be exposed here (TBD).

The server code __MUST__ expose a function that registers a route factory via the `GameServerModuleRouter` token defined in the core `@shieldmaidengames/webgames-internal-server-shared` package.  These factories __WILL BE__ supplied the artifact root directory so they may properly build the router, which will be consumed by the core server.


## Naming Conventions:

### Events and Messaging
* Request/Response
    * Reserved for API interactions so as to not cause confusion between DOM/EventBridge events and API interactions
    * Examples:
        * `FindGameRequest` and `FindGameResponse` for "Hey API find games that match these criteria" and "Here are matching games"
* Cue/Event
    * Reserved for DOM and Game Events.  `*Cue` is a request for something to happen, `*Event` is a notification that something is actually happening
    * Event naming can also include the Before/During/After naming triad, e.g. `BeforePlayerJoinedEvent`, `PlayerJoinedEvent`, `AfterPlayerJoinedEvent`.
    * Examples:
        * `FindGameCue` for "Please load the find game dom interface"
        * `PlayerDiedEvent` for "Hey just letting you know, this player died"
* Message
    * Reserved for EventBridge events and Websocket messages.  This are distinguised from DOM events as they are likely not actually derived from the `Event` base class.
    * EventBridge messages should be reserved for communication between systems.  Shared information, such as the list of current players, that is needed in multiple elements or sections of the application should be supplied via contexts.

## Data transport
* API: (Request/Response)
    * Long lived or multi-subject data such as game outcomes, player registration, or find game requests.
    * All of these things are not subject to moment by moment flux, and should likely live in the data store.
    * An useful illustration of the difference would be "Game Move made" which is a transient event and "Game outcomes including a list of all game moves made", which is a record of a full game and not subject to moment by moment changes.
* DOM: (Cue/Event)
    * Requests for changes in DOM related UI state or notification of UI changes/interactions
    * All Cues and Events should have a static string property `EVENT_NAME` that is used to contain and reference the event name.
    * Examples:
        * User clicked on the start game button -> `StartGameClickEvent` ()
        * "Timer ran out" -> `GameTimerExpiredEvent`
        * "Hey I'm a web component and I need my dependencies" -> `InjectionCue` 
* Game: (Cue/Event)
    * Requests for change in game state, or notification of a game state change
    * All Cues and Events should have a static string property `EVENT_NAME` that is used to contain and reference the event name.
    * Notably, these _may_ be issued through the standard DOM event pathway, but are not required to do so
    * Examples:
        * Player died -> `PlayerDiedEvent`
        * All players have affirmed (probably through a button emitting a `StartGameClickEvent`) that the game is ready to start -> `BeforeStartGameEvent`, `StartGameEvent`, `AfterStartGameEvent` triad.
* Event Bridge: (Message)
    * Reserved for communication between systems, these should be used for summary or overall notification, and should not be assumed to go to a single target as multiple consumers can register to receive these messages.
    * Messages _must_ extend the `BridgeMessage` type, _must_ strictly define the `.messageName` property as one potential string OR one of a set of strings, subject data _must_ be contained in the `.messageData` property, and new message type definitions _should_ strictly define the shape of the data.  Implemented `.messageName` properties _should_ try to follow reverse domain name notation if possible. Even if the event bridge implentation does not currently allow for subscribing at different levels of granularity, it would be good to future proof in this way.
    * Usage examples:
        * Messages between Service/Shared workers and their respective tabs
        * Messages between seperated and decoupled sections of the same application.
    * Examples:
        * "Game goes from in progress to complete" -> `GameStateChangeMessage`
            ```
            {
                messageName: "game.state.change.completed",
                sentTime: Date.now(),
                messageData: {
                    priorState: GameState.InProgress,
                    newState: GameState.Completed,
                    gameSummary: GameSummary,
                    gameLog: GameLog
                },
            }
            ```