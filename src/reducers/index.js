import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fileReducer from "./fileReducer";
import userReducer from "./userReducer";
import talonReducer from "./talonReducer";

const rootReducer = combineReducers({
  user: userReducer,
  talon: talonReducer,
  files: fileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
