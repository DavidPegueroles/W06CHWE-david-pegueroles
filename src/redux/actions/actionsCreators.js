import actionsTypes from "./actionsTypes";

export const getRobotsAction = (robots) => ({
  type: actionsTypes.getRobots,
  robots,
});

export const getARobotAction = (robot) => ({
  type: actionsTypes.getARobot,
  robot,
});

export const robotCharacteristicsAction = (characteristics) => ({
  type: actionsTypes.robotCharacteristics,
  characteristics,
});

export const deleteRobotAction = (id) => ({
  type: actionsTypes.deleteRobot,
  id,
});

export const createRobotAction = (robot) => ({
  type: actionsTypes.deleteRobot,
  robot,
});
