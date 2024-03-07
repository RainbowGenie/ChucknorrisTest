import { MainReducer } from "../main";
import { combineReducers } from "@reduxjs/toolkit";

const main = { main: MainReducer };

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...main,
    ...injectedReducers,
  });
  return rootReducer;
}
