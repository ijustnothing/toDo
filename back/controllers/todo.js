import Todo from '../models/Todo.js';

export const todo_get = async (req, res) => {
  const todoList = await Todo.find({});
  res.json(todoList);
};

export const todo_post = async (req, res) => {
  const { post } = req.body;
  const newTodo = new Todo({
    post,
  });
  await newTodo.save();
  res.json(newTodo);
};
