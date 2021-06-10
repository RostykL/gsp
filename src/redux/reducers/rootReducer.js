import { combineReducers } from "redux";
import reposReducer from "./reposReducer";
import repoHistory from "./repoHistory";

const rootReducer = combineReducers({
  repos: reposReducer,
  history: repoHistory
});

export default rootReducer;