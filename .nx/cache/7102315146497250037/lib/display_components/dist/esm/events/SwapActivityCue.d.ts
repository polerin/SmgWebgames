import { RegisteredActivity } from '../types/index.js';
export default class SwapActivityCue extends Event {
    readonly activityName: RegisteredActivity;
    static EVENT_NAME: "SwapActivityCue";
    constructor(activityName: RegisteredActivity);
}
//# sourceMappingURL=SwapActivityCue.d.ts.map