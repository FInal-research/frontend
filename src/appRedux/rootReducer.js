import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export default rootReducer;
