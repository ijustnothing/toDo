import mongoose from 'mongoose';
import dotenv from 'dotenv';
const createDB = () => {
  dotenv.config()
  mongoose.connect(
    `
  mongodb+srv://andrew:${process.env.PASS_DB}@cluster0.asauj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

export default createDB;
