import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";

// const DialoguesContainer = (props) => {
//   let state = props.store.getState().dialoguesPage;

//   let onSendButtonClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };
//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogues
//       dialoguesPage={state}
//       sendMessage={onSendButtonClick}
//       updateNewMessageBody={onNewMessageChange}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialoguesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogues);

export default DialoguesContainer;
