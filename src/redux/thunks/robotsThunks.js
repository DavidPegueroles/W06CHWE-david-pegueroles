import {
  getARobotAction,
  getRobotsAction,
  robotCharacteristicsAction,
} from "../actions/actionsCreators";

export const getRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_ROBOTS);
  const robots = await response.json();

  dispatch(getRobotsAction(robots.robots));
};

export const getARobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_ROBOTS}${id}`);
  const robot = await response.json();

  dispatch(robotCharacteristicsAction(robot.robot.characteristics));
  dispatch(getARobotAction(robot.robot));
};
