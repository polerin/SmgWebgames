export type MessageBase<DataType> = {
    readonly name: string;
    readonly data: DataType;
};