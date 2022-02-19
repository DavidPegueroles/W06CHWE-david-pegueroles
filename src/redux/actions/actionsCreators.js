import actionsTypes from "./actionsTypes";

export const getRobotsAction = (robots) => ({
  type: actionsTypes.getRobots,
  robots,
});
