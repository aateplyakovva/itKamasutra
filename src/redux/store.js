// import dialoguesReducer from "./dialogues-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, msg: "this is post 1", likesCount: 36 },
//         { id: 2, msg: "this is post 2", likesCount: 6 },
//         { id: 3, msg: "this is post 3", likesCount: 14 },
//       ],
//       newPostText: "",
//     },

//     dialoguesPage: {
//       messages: [
//         { id: 1, msg: "hi" },
//         { id: 2, msg: "how r u?" },
//         { id: 3, msg: "yo" },
//       ],
//       dialogues: [
//         { id: 1, name: "Dimych" },
//         { id: 2, name: "Michalych" },
//         { id: 3, name: "Olga" },
//       ],
//       newMessageBody: "",
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {
//     console.log("state has been changed");
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialoguesPage = dialoguesReducer(
//       this._state.dialoguesPage,
//       action
//     );
//     this._callSubscriber(this.getState());
//   },
// };

// export default store;
