import { combineReducers } from "redux";
import aRobotReducers from "./aRobotReducers";
import robotCharacteristicsReducers from "./robotCharacteristicsReducers";
import robotsReducers from "./robotsReducers";

const rootReducer = combineReducers({
  robots: robotsReducers,
  robot: aRobotReducers,
  characteristics: robotCharacteristicsReducers,
});

export default rootReducer;
