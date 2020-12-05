import { React } from "react";
import c from "./Messages.module.css";

const Message = (props) => {
  return <div className={c.message}>{props.msg}</div>;
};

const Messages = (props) => {
  let messageElements = props.messages.map((m) => <Message msg={m.msg} />);

  return (
    <div className={c.messages}>
      <div>{messageElements}</div>

      {/* <Message msg={messages[0].msg} />
      <Message msg={messages[1].msg} />
      <Message msg={messages[2].msg} />
      <Message msg={messages[3].msg} /> */}
    </div>
  );
};

export default Messages;
