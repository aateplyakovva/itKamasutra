import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.msg} likeCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div>
      posts
      <div>
        <textarea
          cols="30"
          rows="4"
          placeholder="write something"
          value={props.newPostText}
          ref={newPostElement}
          onChange={onPostChange}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElements}
      {/* <Post message={posts[0].msg} likeCount={posts[0].likesCount}/>
        <Post message={posts[1].msg} likeCount={posts[1].likesCount}/>
        <Post message={posts[2].msg} likeCount={posts[2].likesCount}/> */}
    </div>
  );
};

export default MyPosts;
