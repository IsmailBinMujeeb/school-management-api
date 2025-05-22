import express from 'express';
import { config } from 'dotenv';

import schoolRoutes from './router/school.route.js';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', schoolRoutes);

export default app;
