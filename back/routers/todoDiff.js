import express from 'express';
import { todo_get, todo_delete,todo_put } from '../controllers/todoDiff.js';

const router = express.Router();

router.route('/:id')
  .get(todo_get)
  .delete(todo_delete)
  .put(todo_put)
export default router