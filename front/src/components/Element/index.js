import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  thunkDeleteTodo,
  thunkChangeTodo,
  thunkEditTodo,
} from '../../redux/thunkCreators';
import './style.css';

const Element = ({ el }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(el.post);

  const deleted = (event) => {
    event.preventDefault();
    const id = event.target.parentElement.parentElement.id;
    dispatch(thunkDeleteTodo(id));
  };

  const change = (event) => {
    const id = event.target.parentElement.id;
    dispatch(thunkChangeTodo(id));
  };
  const handlerEdit = (event) => {
    event.preventDefault();
    setVisible(true);
    const { id } = event.target;
    const {
      edit: { value: edit },
    } = event.target;
    dispatch(thunkEditTodo(id, edit));
  };
  const handlerVisible = (event) => {
    event.preventDefault();
    setVisible(true);
  };
  const handlerChangeInput = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="elem" id={el._id}>
      <span
        onClick={change}
        style={
          el.completed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {el.post}
      </span>
      <div className="buttons">
        <form
          style={visible ? { display: 'block' } : { display: 'none' }}
          id={el._id}
          onSubmit={handlerEdit}
          className="formEdit"
        >
          <button class="visible">Edit</button>
          <input
            className="inputAbsolute"
            name="edit"
            type="text"
            value={value}
            onChange={handlerChangeInput}
          />
        </form>
        <button onClick={handlerVisible}>Edit</button>
        <button onClick={deleted}>delete</button>
      </div>
    </div>
  );
};

export default Element;
