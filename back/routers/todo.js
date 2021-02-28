import express from 'express';
import { todo_get, todo_post } from '../controllers/todo.js';

const router = express.Router();

router
.route('/')
.get(todo_get)
.post(todo_post);

export default router