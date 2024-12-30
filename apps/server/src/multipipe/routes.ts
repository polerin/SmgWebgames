import path from 'node:path';

import express from 'express';
import { multipipeApiRouter } from './api/index.js';
import FileRouter from '../file_serving/file_router.js';
import { logRoutes } from '../utility/index.js';

const multipipeRouter = express.Router();
const artifactPath = path.resolve(process.env.PWD ?? "./", './artifacts');

console.info('setting multipipe artifact path to', artifactPath);

const frontendRouter = new FileRouter({
    serverRoot: artifactPath + '/frontend',
    rootURI: 'index.html',
});
const gameRouter = new FileRouter({
    serverRoot: artifactPath + '/games'
})

multipipeRouter.use('/', frontendRouter.getRouter());
multipipeRouter.use('/game', gameRouter.getRouter());
logRoutes('api? ', multipipeApiRouter);
logRoutes('game?', gameRouter.getRouter());
logRoutes('frontend?', frontendRouter.getRouter());

multipipeRouter.use('/api', multipipeApiRouter);
multipipeRouter.get('/blorp', (_, res) => res.send('yah?'));

logRoutes('setting multipipe routes', multipipeRouter)

;
export {
    multipipeRouter
};
