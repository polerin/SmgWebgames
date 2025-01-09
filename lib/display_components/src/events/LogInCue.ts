export default class LogInCue extends Event {
    public static EVENT_NAME = 'LogInCue' as const;

    public constructor(public readonly playerName: string) {
        super(LogInCue.EVENT_NAME, {bubbles: true, composed: true});
    }
}