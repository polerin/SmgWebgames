import { Token } from 'ditox';
import { DetailedError } from '@shieldmaidengames/webgames-shared';

export class InvalidTokenBindingDefintion extends DetailedError {
    constructor(
        public override readonly message: string,
        public override readonly details: {
            suppliedDefinition: unknown
        }
    ) {
        super(message, details);
    }
}

export class UnknownToken extends DetailedError {
    constructor(
        public override readonly message: string,
        public override readonly details: {
            token: Token<any>
        }
    ) {
        super(message, details);
    }
}

export class BindingAlreadyDefined extends DetailedError {
    constructor(
        public override readonly message: string,
        public override readonly details: {
            token: Token<any>
        }
    ) {
        super(message, details);
    }
}