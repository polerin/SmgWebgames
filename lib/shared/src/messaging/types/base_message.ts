export type MessageBase<NameType extends string, DataType> = {
    readonly name: NameType;
    readonly data: DataType;
};