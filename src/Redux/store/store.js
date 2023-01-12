import { createStore } from "redux";
import { combineReducers } from "redux";
import {

} from "../reducers/reducers";

export const store = createStore(
  combineReducers({

  })
);