import  express from 'express';
import db_config from './config/db_config';
import * as mongoose from 'mongoose';
import chalk from 'chalk';
import { selectUsers } from './controllers/selectUsers';
const notifier = require('node-notifier');

let app = express();

app.use('/api', selectUsers );

app.listen(3000);
