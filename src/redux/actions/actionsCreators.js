import actionsTypes from "./actionsTypes";

export const getRobotsAction = (robots) => ({
  type: actionsTypes.getRobots,
  robots,
});

export const getARobotAction = (robot) => ({
  type: actionsTypes.getARobot,
  robot,
});
