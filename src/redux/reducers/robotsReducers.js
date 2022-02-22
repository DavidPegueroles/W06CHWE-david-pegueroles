import actionsTypes from "../actions/actionsTypes";

const robotsReducers = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case actionsTypes.getRobots:
      newRobots = [...action.robots];
      break;
    case actionsTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot._id !== action.id);
      break;
    case actionsTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    default:
      newRobots = [...robots];
  }

  return newRobots;
};

export default robotsReducers;
