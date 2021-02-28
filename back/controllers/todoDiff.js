import Todo from '../models/Todo.js';

export const todo_get = async (req, res) => {
  const { id } = req.params;
  const post = await Todo.findById({ _id: id });
  post.completed = !post.completed;
  await post.save();
  res.json(post);
};

export const todo_delete = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Todo.findByIdAndDelete({ _id: id });
  res.status(208).json(deletedPost);
};

export const todo_put = async (req, res) => {
  const { id } = req.params;
  const { edit } = req.body;
  const post = await Todo.findById({ _id: id });
  await post.update({ post: edit });
  await post.save();
  res.json(post._id);
};
