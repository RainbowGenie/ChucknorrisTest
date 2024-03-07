import { combineReducers } from "@reduxjs/toolkit";

import { ReferenceReducer } from "./reference";

export const MainReducer = combineReducers({
  reference: ReferenceReducer,
});
