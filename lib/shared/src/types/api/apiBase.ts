/*
 * Base classes for requests and responses
 */

import { PaginatedImperitive, PaginatedOutcome } from '../smg_core.js';

/**
 * Indicates a request that requires pagination information
 * 
 * 'page' is zero based
 */
export type PaginatedRequest = PaginatedImperitive;

/**
 * Indicates a response that includes pagination information
 * 
 * The actual response will be contained within the data property
 * 'page' is 0 based
 */
export type PaginatedResponse<DataType> = PaginatedOutcome & {

    /**
     * The actual data or result of the api request
     */
    data: DataType;

    /**
     * Optional command instance id
     * 
     * This can be used to look up the status of long running or 
     * queued requests.
     */
    commandInstanceId?: string;
}

/**
 * Indicates an error was encountered in the process of satisfying the API request
 * 
 * May include a code or detailed information
 */
export type ApiErrorResponse = {
    message: string;
    code?: string;
    details?: unknown;
}
