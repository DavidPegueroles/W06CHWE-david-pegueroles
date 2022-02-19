import { combineReducers } from "redux";
import robotsReducers from "./robotsReducers";

const rootReducer = combineReducers({
  robots: robotsReducers,
});

export default rootReducer;
