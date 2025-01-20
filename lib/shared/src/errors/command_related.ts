import DetailedError from './detailed_error.js';

export class InvalidCommandDefintion extends DetailedError {
    constructor(
        public override readonly message: string,
        public override readonly details: {
            commandHandlerName: string,
            suppliedDefinition: unknown
        }
    ) {
        super(message, details);
    }
}