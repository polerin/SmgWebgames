import express from 'express';
import { addServerRoutes } from './routes.js';
import { logRoutes } from './utility/index.js';

import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('hi?  Yeah?'));
addServerRoutes(app);

logRoutes("Started with", app._router);

export default app;
