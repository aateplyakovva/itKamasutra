import { combineReducers, createStore } from "redux";
import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  dialoguesPage: dialoguesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
