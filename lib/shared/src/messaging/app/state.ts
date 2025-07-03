import { CoreApplicationState, isCoreApplicationState } from '../../types/index.js';
import { coerceToMessageType } from '../typeguards.js';
import { MessageBase } from '../types/index.js';
import { AppMessageNames } from './constants.js';

export function isFullStateUpdateMessage(subject: unknown): subject is FullStateUpdateMessage {

    const message = coerceToMessageType<FullStateUpdateMessage>(subject, AppMessageNames.FullStateUpdate);

    if (message === false) {
        return false;
    }

    return isCoreApplicationState(message.data);
}

export type FullStateUpdateMessage = MessageBase<typeof AppMessageNames.FullStateUpdate, CoreApplicationState>;