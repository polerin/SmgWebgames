import type Express  from 'express';

import { multipipeRouter } from './multipipe/index.js';

export const addServerRoutes = (app: Express.Application): void => {
    app.use('/multipipe', multipipeRouter);
}
