import { RegisteredActivity } from '../types/index.js';

export default class SwapActivityCue extends Event {
    public static EVENT_NAME = 'SwapActivityCue' as const;

    public constructor(
        public readonly activityName: RegisteredActivity
    ) {
        super(SwapActivityCue.EVENT_NAME, { bubbles: true });
    }
}
