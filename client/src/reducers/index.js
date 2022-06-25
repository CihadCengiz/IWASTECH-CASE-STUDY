import { combineReducers } from "redux";
import authors from "./authors";
import books from "./books";
import categories from "./categories";
import publishers from "./publishers";
const reducers = combineReducers({
  authors,
  books,
  categories,
  publishers
});

export default reducers;