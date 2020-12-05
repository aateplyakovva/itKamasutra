import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   };

//   let onPostChange = (text) => {
//     let action = updatePostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       newPostText={state.profilePage.newPostText}
//       posts={state.profilePage.posts}
//       addPost={addPost}
//       updatePostText={onPostChange}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    updatePostText: (text) => {
      let action = updatePostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
