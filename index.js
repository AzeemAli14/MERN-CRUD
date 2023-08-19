import express from 'express';
import connectDB from './database/db.js';

const app = express();

const port = 8000;

connectDB();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})