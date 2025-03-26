import { MessageBase } from './types/base_message.js';
import { coerceToNonEmpty, isNonEmptyString } from '../utility/typeguards.js';

export function isMessageBase(subject: unknown, expectedName?: string): subject is MessageBase<any, any> {
    const msg = coerceToNonEmpty<MessageBase<any, any>>(subject);

    if (msg === false || !isNonEmptyString(msg, 'name') || typeof msg.data !== 'object') {
       return false; 
    }

    if (expectedName !== undefined && msg.name !== expectedName) {
        return false;
    }

    return true;
}

export function coerceToMessageType<
    MessageType extends MessageBase<any, any> = MessageBase<any, any>
>(subject: unknown, expectedName?: string): MessageType | false {
    if (!isMessageBase(subject, expectedName)) {
        return false;
    }

    if (expectedName!== undefined && subject.name !== expectedName) {
        return false;
    }

    return <MessageType>subject;
}