import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // add middleware here if needed
});

export default store;
