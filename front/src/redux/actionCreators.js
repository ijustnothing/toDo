import {
  ADD_POST,
  LOAD_POST,
  DELETE_POST,
  COMPLETED_POST,
  EDIT_POST,
} from './actionTypes';

export const addPostAC = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const loadPostAC = (payload) => {
  return {
    type: LOAD_POST,
    payload,
  };
};
export const deletePostAC = (payload) => {
  return {
    type: DELETE_POST,
    payload,
  };
};
export const completedAC = (payload) => {
  return {
    type: COMPLETED_POST,
    payload,
  };
};
export const editdAC = (payload) => {
  return {
    type: EDIT_POST,
    payload,
  };
};

