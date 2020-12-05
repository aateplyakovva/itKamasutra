import { React } from "react";
import { NavLink } from "react-router-dom";
import c from "./DialogueItems.module.css";

const DialogueItem = (props) => {
  return (
    <div className={c.item}>
      <NavLink to={"/dialogues/" + props.id} activeClassName={c.active}>
        <img
          className={c.avatar}
          src="../../../logo192.png"
          alt="author's ava"
        />
        {props.name}
      </NavLink>
    </div>
  );
};

const DialogueItems = (props) => {
  let dialogueElements = props.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} />
  ));

  return <div className={c.dialogueItems}>{dialogueElements}</div>;
};

export default DialogueItems;
