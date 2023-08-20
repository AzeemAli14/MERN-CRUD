import express from 'express';
import ConnectionDB from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 8000;

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

ConnectionDB(userName, password);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})