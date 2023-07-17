import { combineReducers, createStore } from "redux";
import { searchReducer } from "./search";
import { resultReducer } from "./result";

const rootReducer = combineReducers({
  searchReducer,
  resultReducer,
});

export const store = createStore(rootReducer);
