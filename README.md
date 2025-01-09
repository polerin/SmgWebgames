# MonoRepo for publishing a combo of packages and applications aimed at web based multiplayer game development

## Applications
* API: Express for the API/Game Cooridinator/File Server
* Game: (currently but can be swapped out) Excalibur TS for game engine
* Frontend: A Lit web component base for the frontend find/join game.  Eventually I might even build this out to be a multi-game interface, but for now it will be focused on serving one game at a time.

## Libraries
* Api Client: Used by the frontend and game, potentially integratable into other things like stream overlays
* Display Components: Lit Webcomponents used to build the frontend and other things like it, provided for stream integration as well as reuse in both the game and frontend
* Internal Shared: Shared functionality and types that are only intended to be consumed by the game/frontend/api
* Shared: Shared functionality and types that are intended to be consumed by the applications as well as external applications.

## Naming Conventions:

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