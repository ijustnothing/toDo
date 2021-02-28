import React from 'react';
import { addPostAC } from '../../redux/actionCreators';
import { useDispatch } from 'react-redux';
import './style.css';

function Form(props) {
  const dispatch = useDispatch();

  const handlerAdded = (event) => {
    event.preventDefault();
    const {
      post: { value: post },
    } = event.target;
    fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        post,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => dispatch(addPostAC(data)));
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
