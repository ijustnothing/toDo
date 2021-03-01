import React from 'react';
import { useDispatch } from 'react-redux';
import { thunkAddTodo } from '../../redux/thunkCreators';
import './style.css';

function Form(props) {
  const dispatch = useDispatch();

  const handlerAdded = (event) => {
    event.preventDefault();

    const {
      post: { value: post },
    } = event.target;

    dispatch(thunkAddTodo(post)); 

    event.target.post.value = '';
  };

  return (
    <div className="wrapperAdd">
      <h1>Todo List</h1>
      <form className="wrapperForm" onSubmit={handlerAdded}>
        <label htmlFor="post">
          <input className="inputAdd" type="text" name="post" />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
