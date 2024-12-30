export type FileRouterConfig = {
    /**
     * Path on the server that the files are found.
     * 
     * This is used both to locate the starting point, and also to 
     * constrain the files to ones under this root path.
     */
    serverRoot: string;

    /**
     * mapping of URI root to the file pattern used
     */
    filePatterns: Record<string, string>;

    /**
     * what to serve for the root URI (e.g. index.html?)
     */
    rootURI?: string;
};
