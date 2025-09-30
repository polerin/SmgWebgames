import { CoreApplicationState } from '@shieldmaidengames/webgames-shared';

export default class FullStateUpdateCue extends Event {
    public static EVENT_NAME = 'FullStateUpdateCue' as const;

    public constructor(public readonly newState: CoreApplicationState) {
        super(FullStateUpdateCue.EVENT_NAME, {bubbles: true, composed: true});
    }
}