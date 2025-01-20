import { BaseCommandDefinition, BaseCommandResult } from '../commands/types.js';

export default interface ICommandHandler<
    CommandType extends BaseCommandDefinition<any>,
    ResultType extends BaseCommandResult<any>
> {
    get commandHandlerName(): string;

    execute(command: CommandType): Promise<ResultType>;
}
