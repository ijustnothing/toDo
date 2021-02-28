import {
  ADD_POST,
  LOAD_POST,
  DELETE_POST,
  COMPLETED_POST,
  EDIT_POST,
} from './actionTypes';
const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case LOAD_POST:
      return { ...state, posts: [...action.payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((el) => el._id !== action.payload)],
      };
    case COMPLETED_POST:
      return {
        ...state,
        posts: [
          ...state.posts.map((el) => {
            if (el._id === action.payload) {
              el.completed = !el.completed;
            }
            return el;
          }),
        ],
      };
    case EDIT_POST:
      const editPost = state.posts.find((el) => el._id === action.payload.data);
      editPost.post = action.payload.edit;
      return {
        ...state,
        posts: [...state.posts],
      };
    default:
      return state;
  }
};

export default reducer;
