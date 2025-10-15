/**
 * These are the names of the activities that the main application root can display.
 * 
 * @see DefaultAppActivities
 */
export const defaultAppActivityList = [
    'home',
    'welcome',
    'searchGames',
    'findGame',
    'joinGame',
    'startGame',
] as const;

/**
 * These are the names of the activities that the main application root can display.
 * 
 * @see defaultAppActivityList
 */
export type DefaultAppActivities = typeof defaultAppActivityList[number];