const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, msg: "this is post 1", likesCount: 36 },
    { id: 2, msg: "this is post 2", likesCount: 6 },
    { id: 3, msg: "this is post 3", likesCount: 14 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newMessage = {
        id: 4,
        msg: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newMessage],
        newPostText: "",
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
