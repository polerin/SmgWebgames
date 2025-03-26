export const AppMessageNames = {
    'FullStateUpdate': 'app.state.fullUpdate',
    'LoginAttempt': 'app.user.login.attempt',
    'LoginOutcome': 'app.user.login.outcome',
} as const;

export type AppMessageTypes = keyof typeof AppMessageNames;
export type AppMessageName = typeof AppMessageNames[AppMessageTypes];