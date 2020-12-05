import React from "react";
import DialogueItems from "./DialogueItems/DialogueItems";
import c from "./Dialogues.module.css";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
  let state = props.dialoguesPage;
  let newMessageBody = state.newMessageBody;

  let onSendButtonClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={c.dialogues}>
      <DialogueItems dialogues={state.dialogues} />
      <div>
        <div>
          <Messages messages={state.messages} />
        </div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="your message..."
            ></textarea>
          </div>
          <div>
            <button onClick={onSendButtonClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
