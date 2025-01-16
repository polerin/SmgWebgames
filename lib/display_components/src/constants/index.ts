export const RegisteredActivities = [
    'welcome', // welcome/login screen
    'home', // user home screen
    'search_games', // list of all available games to play
    'find_game', // find a game instance (of a specific game) to join/
    'join_game', // join a specified game instance
    'start_game', // start a new instance of a specified game
] as const;

export const SharedWorkerDefaultPath = "/worker/index.js";