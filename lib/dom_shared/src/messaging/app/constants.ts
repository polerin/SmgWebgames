export const AppMessageNames = {
    'FullStateUpdate': 'smg.hosting.app.state.fullUpdate',
    'LoginAttempt': 'smg.hosting.app.user.login.attempt',
    'LoginOutcome': 'smg.hosting.app.user.login.outcome',
} as const;

export type AppMessageTypes = keyof typeof AppMessageNames;
export type AppMessageName = typeof AppMessageNames[AppMessageTypes];