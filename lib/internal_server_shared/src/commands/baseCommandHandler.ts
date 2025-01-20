import ICommandHandler from '../interfaces/ICommandHandler.js';
import { isPaginatedDefinition } from './typeguards.js';
import { BaseCommandDefinition, BaseCommandResult, PaginatedCommandDefinition } from './types.js';
import { InvalidCommandDefintion, Typeguard } from '@shieldmaidengames/webgames-shared';

export default abstract class BaseCommandHandler<
    CommandDefinitionType extends BaseCommandDefinition<any>,
    CommandResultType extends BaseCommandResult<any>
> implements ICommandHandler<CommandDefinitionType, CommandResultType>
{
    /**
     * What is this command handler's name?
     */
    protected abstract _commandHandlerName: string;

    public get commandHandlerName() {
        return this._commandHandlerName;
    }

    /**
     * Specify this in order to automatically typecheck the supplied command definition
     */
    protected typeGuard?: Typeguard<CommandDefinitionType>;

    /**
     * Template method, this should contain the execution logic for any child class
     */
    protected abstract handle(def: CommandDefinitionType): Promise<CommandResultType>;

    public execute(command: CommandDefinitionType): Promise<CommandResultType> {
        // !! undefined typeguard will not fail this check, only explicit fails
        if (this.typeGuard?.(command) !== false) {
            return Promise.reject(new InvalidCommandDefintion(
                'Encountered an invalid command definition',
                { commandHandlerName: this.commandHandlerName, suppliedDefinition: command})
            );
        }

        this.handle(command);

        return this.handle(command);
    }


    protected buildCommandResult(
        def: CommandDefinitionType,
        resultData: CommandResultType["data"]
):  CommandResultType {
        const buffer = {
            commandName: def.commandName,
            commandHandler: this.commandHandlerName,
            data: resultData,
        } as CommandResultType;

        if (isPaginatedDefinition(def)) {
            return this.addPagination(def, buffer);
        }

        return buffer as CommandResultType;
    }

    protected addPagination<DefinitionType extends PaginatedCommandDefinition<any>>(
        def: DefinitionType,
        buffer: Partial<CommandResultType>
    ): CommandResultType {
        return <CommandResultType><unknown>{
            ...buffer,
            page: def.page
        };
    }


}