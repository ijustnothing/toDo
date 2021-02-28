import mongoose from 'mongoose';

const Todo = mongoose.model('todos', {
  post: String,
  completed: {
    type: Boolean,
    default: false,
  },
});
export default Todo;
