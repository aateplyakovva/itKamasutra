import { React } from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img className={c.avatar} src="../../../logo192.png" alt="author's ava" />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
