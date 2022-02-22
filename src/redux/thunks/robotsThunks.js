import {
  createRobotAction,
  deleteRobotAction,
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

export const deleteRobotThunk = (id) => async (dispatch) => {
  const token = localStorage.getItem("robotsToken");

  const response = await fetch(
    `${process.env.REACT_APP_API_ROBOTS}delete/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_ROBOTS}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};
