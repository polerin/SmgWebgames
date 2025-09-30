export default class LogInCue extends Event {
    public static EVENT_NAME = 'LogInCue' as const;
    public name = LogInCue.EVENT_NAME;
    
    public readonly data: {
        userName: string;
    };

    public constructor(userName: string) {
        super(LogInCue.EVENT_NAME, {bubbles: true, composed: true});

        this.data = {userName};
    }
}