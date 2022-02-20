import actionsTypes from "../actions/actionsTypes";

const aRobotReducers = (robot = [], action = {}) => {
  let newRobot;

  if (action.type === actionsTypes.getARobot) {
    newRobot = action.robot;
  } else {
    newRobot = robot;
  }

  return newRobot;
};

export default aRobotReducers;
