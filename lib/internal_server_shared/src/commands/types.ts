import { PaginatedImperitive, PaginatedOutcome } from '@shieldmaidengames/webgames-shared';

/**
 * The base type for all command definitions
 */
export type BaseCommandDefinition<ParamsType> = {
    /**
     * Unique name for the command
     * 
     * This name should be in reverse domain notation probably
     **/
    commandName: string;

    /**
     * Optional command instance id (to be added automatically if needed)
     * 
     * Used for looking up commands in a queue
     */
    commandInstanceId?: string;

    /**
     * The details of the command.
     * 
     * This is where any information needed by the command should live.
     */
    commandParams: ParamsType
};

/**
 * The base type for all command results
 * 
 */
export type BaseCommandResult<ResultType> = {
    /**
     * The name of the command that was executed
     */
    commandName: string;

    /**
     * The command handler that actually satisfied this command
     * 
     * There potentially multiple handlers per command, which one
     * was used?
     */
    commandHandler: string;

    /**
     * Optional instance id
     * 
     * Used to look up or describe long running or queued commands
     */
    commandInstanceId?: string;

    /**
     * The outcome or returned data from the command
     */
    data: ResultType;
};

/**
 * Base type for paginated command definitions
 */
export type PaginatedCommandDefinition<ParamsType> = BaseCommandDefinition<ParamsType> & PaginatedImperitive;

/**
 * Base type for paginated command results
 */
export type PaginatedCommandResult<ParamsType> = BaseCommandResult<ParamsType> & PaginatedOutcome;
