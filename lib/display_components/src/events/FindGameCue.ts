import { SmgHostedAppDefinition } from '@shieldmaidengames/webgames-shared';

export default class FindGameCue extends Event {
    public static EVENT_NAME = 'FindGameCue' as const;

    public constructor(public readonly gameInfo: SmgHostedAppDefinition) {
        super(FindGameCue.EVENT_NAME);
    }
}