import path from 'node:path';

import express from 'express';
import { multipipeApiRouter } from './api/index.js';
import { logRoutes } from '../utility/index.js';

const multipipeRouter = express.Router();
const artifactPath = path.resolve(process.env.PWD ?? "./", './artifacts');

console.info('setting multipipe artifact path to', artifactPath);

const frontendRouter =  express.static(artifactPath + '/frontend', {
    index: ['index.html']
});
const gameRouter = express.static(artifactPath + '/game');

multipipeRouter.use('/', frontendRouter);
multipipeRouter.use('/game', gameRouter);
logRoutes('api? ', multipipeApiRouter);

multipipeRouter.use('/api', multipipeApiRouter);

logRoutes('setting multipipe routes', multipipeRouter)

;
export {
    multipipeRouter
};
