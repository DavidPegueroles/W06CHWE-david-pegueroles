import actionsTypes from "../actions/actionsTypes";

const aRobotReducers = (robot = [], action = {}) => {
  let newRobot;

  switch (action.type) {
    case actionsTypes.getARobot:
      newRobot = [...action.robot];
      break;
    default:
      newRobot = [...robot];
  }

  return newRobot;
};

export default aRobotReducers;
