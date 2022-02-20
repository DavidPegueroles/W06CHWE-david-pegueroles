import actionsTypes from "../actions/actionsTypes";
import aRobotReducers from "./aRobotReducers";

describe("Given an aRobotReducers function", () => {
  describe("When it receives currentRobot and getARobot action with robot 'Luis'", () => {
    test("Then it should return robot 'Luis'", () => {
      const currentRobot = [];

      const robot = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "1",
          name: "Luis",
          url: "",
        },
      ];

      const action = {
        type: actionsTypes.getARobot,
        robot,
      };

      const reducerResult = aRobotReducers(currentRobot, action);

      expect(reducerResult).toEqual(robot);
    });
  });

  describe("When it receives currentRobot and a non existing action with robot 'Luis'", () => {
    test("Then it should return currentRobot", () => {
      const currentRobot = [];

      const robot = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "1",
          name: "Luis",
          url: "",
        },
      ];

      const action = {
        type: actionsTypes.unexisting,
        robot,
      };

      const reducerResult = aRobotReducers(currentRobot, action);

      expect(reducerResult).toEqual(currentRobot);
    });
  });

  describe("When it doesn't receive any robot nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = aRobotReducers();

      expect(reducerResult).toHaveLength(0);
    });
  });
});
