
export type SmgUser = {
    name: string;
}

export type CoreApplicationState = {
    currentUser: SmgUser | undefined,
    // connectedInstances?
};

/**
 * This type describes any kind of request/definition/etc
 * that is supplied to get a paginated outcome.  API Requests
 * Command definitions, Event Cues, etc.
 * 
 * This is mostly useful at the typechecking level.
 */
export type PaginatedImperitive = {
    /**
     * How many records to return
     */
    count: number;

    /**
     * What page (based on count) is being requested.  0 based
     */
    page: number;
};

export type PaginatedOutcome = {
    /**
     * How many total records are available for this request
     * 
     * May not be available for all request types
     */
    total?: number;

    /**
     * The page this set of records relate too
     */
    page: number;
    
}