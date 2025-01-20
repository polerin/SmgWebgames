export default class DetailedError extends Error {
    constructor(
        public override readonly message: string,
        public readonly details?: unknown) {
        super();
    }
}
