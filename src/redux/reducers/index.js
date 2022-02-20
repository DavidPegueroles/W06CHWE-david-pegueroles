import { combineReducers } from "redux";
import aRobotReducers from "./aRobotReducers";
import robotsReducers from "./robotsReducers";

const rootReducer = combineReducers({
  robots: robotsReducers,
  robot: aRobotReducers,
});

export default rootReducer;
