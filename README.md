
MonoRepo for publishing a combo of packages and applications aimed at web based multiplayer game development

Applications:
* API: Express for the API/Game Cooridinator/File Server
* Game: (currently but can be swapped out) Excalibur TS for game engine
* Frontend: A Lit web component base for the frontend find/join game.  Eventually I might even build this out to be a multi-game interface, but for now it will be focused on serving one game at a time.

Libraries:
* Api Client: Used by the frontend and game, potentially integratable into other things like stream overlays
* Display Components: Lit Webcomponents used to build the frontend and other things like it, provided for stream integration as well as reuse in both the game and frontend
* Internal Shared: Shared functionality and types that are only intended to be consumed by the game/frontend/api
* Shared: Shared functionality and types that are intended to be consumed by the applications as well as external applications.