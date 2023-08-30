import express from 'express';
import ConnectionDB from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));
app.use('/', router);

const port = 8000;

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

ConnectionDB(userName, password);

app.listen(port, () => {
    console.log(`CRUD-App is running at http://localhost:${port}`);
})