import express from 'express';
import type { Request, Response } from 'express';

import { FileRouterConfig } from './types.js';

type eRouter = express.Router;

export default class FileRouter {

    protected config: FileRouterConfig = {
        serverRoot: (process.env.PWD ?? './') + '/dist/',
        filePatterns: { '/': ':fileName\./(js|json|jpeg|xml|png|html|html)/'},
        rootURI: undefined,
    };

    protected router!: eRouter;

    public constructor(config: Partial<FileRouterConfig>) {
        this.config = this.buildConfig(config);
        this.buildRouter();
    }

    public getRouter(): eRouter {
        return this.router;
    }

    protected buildConfig(config: Partial<FileRouterConfig>): FileRouterConfig {
        const conf: FileRouterConfig = {...this.config, ...config}
        
        return conf;
    }
    
    protected buildRouter(): void {
        this.router = express.Router();

        Object.entries(this.config.filePatterns).forEach(([uriRoot, pattern]) => {
            this.router.get(uriRoot + pattern, (req, res) => this.handleFileRequest(req, res));
        });

        if (this.config.rootURI !== undefined) { 
            this.router.all('/', (req, res) => this.handleFileRequest(req, res, this.config.rootURI));
        }
    }

    protected async handleFileRequest(req: Request, res: Response, fileName?: string | undefined): Promise<void> {
        try {
            fileName ??= req.params.fileName;
            await this.sendFile(fileName, res);
        } catch (e: unknown) { 
            this.sendError(e, res);
        }
        
    }

    protected sendFile(fileName: string, res: Response) {
        return new Promise<Error | void>((resolve, reject) => {
            res.sendFile(fileName, { root: this.config.serverRoot }, (err) => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        })
    }

    protected sendError(e: unknown, res: Response): void {
        console.log('Encountered Error sending file: ', e);
    
        if (!(e instanceof Error)) {
            return;
        }

        res.sendStatus(404).send('Unable to send file');
    }
}