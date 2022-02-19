import { getRobotsAction } from "../actions/actionsCreators";

export const getRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_ROBOTS);
  const robots = await response.json();

  dispatch(getRobotsAction(robots.robots));
};
