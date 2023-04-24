import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bp from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import whoamiRouter from './routes/whoami.routes.mjs';
import homeRouter from './routes/home.routes.mjs';
import { notFoundHandler } from './handlers/notFound.handlers.mjs';

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Server config
dotenv.config();
app.use(cors({ origin: ['https://www.freecodecamp.org'], optionsSuccessStatus: 200 }));
app.use(express.static(_dirname + '/views'));
app.use(bp.urlencoded({ extended: false }));

// Routes
app.use('/', homeRouter);
app.use('/api', whoamiRouter);

// Not found
app.use(notFoundHandler)

// Starting server
app.listen(PORT, console.log(`server running on port: ${PORT}`));
