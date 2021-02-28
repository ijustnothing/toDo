import express from 'express';
import cors from 'cors';
import routerTodo from './routers/todo.js';
import routerTodoDiff from './routers/todoDiff.js';
import createDB from './middleware/dbConnection.js';

const app = express();

// app config ----------->

createDB() // connect DB
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 // routing ---------->

app.use('/todo', routerTodo);
app.use('/todo', routerTodoDiff);

export default app;
