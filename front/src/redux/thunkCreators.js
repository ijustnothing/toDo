import {
  loadPostAC,
  addPostAC,
  deletePostAC,
  completedAC,
  editdAC,
} from './actionCreators';

export const thunkInitDevs = () => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_URL, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then((responce) => responce.json())
      .then((data) => dispatch(loadPostAC(data)));
  };
};

export const thunkAddTodo = (post) => {
  return (dispatch) => {
    fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        post,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => dispatch(addPostAC(data)));
  };
};

export const thunkDeleteTodo = (id) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    })
      .then((responce) => responce.json())
      .then((data) => {
        dispatch(deletePostAC(data._id));
      });
  };
};

export const thunkChangeTodo = (id) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then((responce) => responce.json())
      .then((data) => {
        dispatch(completedAC(data._id));
      });
  };
};

export const thunkEditTodo = (id, edit) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        edit,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(editdAC({ data, edit })));
  };
};
