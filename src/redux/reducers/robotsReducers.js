import actionsTypes from "../actions/actionsTypes";

const robotsReducers = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionsTypes.getRobots:
      newRobots = [...action.robots];
      break;
    default:
      newRobots = [...robots];
  }

  return newRobots;
};

export default robotsReducers;
