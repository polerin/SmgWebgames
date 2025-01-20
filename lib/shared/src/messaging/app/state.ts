import { CoreApplicationState } from '../../types/index.js';
import { MessageBase } from '../types/index.js';

export class FullStateUpdate implements MessageBase<CoreApplicationState> {
    public static MESSAGE_NAME = 'app.state.fullUpdate';
    public readonly name = FullStateUpdate.MESSAGE_NAME;
    constructor(public readonly data: CoreApplicationState) {}
}