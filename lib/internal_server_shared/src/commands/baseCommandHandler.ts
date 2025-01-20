import ICommandHandler from '../interfaces/ICommandHandler.js';
import { isPaginatedDefinition } from './typeguards.js';
import { BaseCommandDefinition, BaseCommandResult, PaginatedCommandResult, PaginatedCommandDefinition } from './types.js';
import { InvalidCommandDefintion, Typeguard } from '@shieldmaidengames/webgames-shared';

export default abstract class BaseCommandHandler<
    DefinitionType extends BaseCommandDefinition<any>,
    ResultType extends DefinitionType extends PaginatedCommandDefinition<any> ? PaginatedCommandResult<any> : BaseCommandResult<any>
> implements ICommandHandler<DefinitionType, ResultType>
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
    protected typeGuard?: Typeguard<DefinitionType>;

    /**
     * Template method, this should contain the execution logic for any child class
     */
    protected abstract handle(def: DefinitionType): Promise<ResultType>;

    public execute(command: DefinitionType): Promise<ResultType> {
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


    protected buildCommandResult(def: DefinitionType, resultData: ResultType["data"]): ResultType {
        const buffer: Partial<ResultType> = {
            commandName: def.commandName,
            commandHandler: this.commandHandlerName,
            data: resultData,
        };

        if (isPaginatedDefinition(def)) {
            return this.addPagination(def, buffer);
        }

        return buffer as ResultType;
    }

    protected addPagination<DefinitionType extends PaginatedCommandDefinition<any>>(
        def: DefinitionType,
        buffer: Partial<ResultType>
    ): ResultType {
        return <ResultType><unknown>{
            ...buffer,
            page: def.page
        };
    }


}