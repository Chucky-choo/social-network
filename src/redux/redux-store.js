import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./header-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {musicReducer} from "./music-reducer";

let reduser = combineReducers({
  post: postReducer,
  dialog: dialogReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
  profile: profileReducer,
  music: musicReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduser, composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reduser, applyMiddleware(thunkMiddleware))

export default store