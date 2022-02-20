import actionsTypes from "../actions/actionsTypes";
import robotsReducer from "./robotsReducers";

describe("Given a robotsReducer function", () => {
  describe("When it receives currentRobots and getRobots action with robots 'Luis' and 'Marta'", () => {
    test("Then it should return robots 'Luis' and 'Marta'", () => {
      const currentRobots = [];

      const robots = [
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
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "2",
          name: "Marta",
          url: "",
        },
      ];

      const action = {
        type: actionsTypes.getRobots,
        robots,
      };

      const reducerResult = robotsReducer(currentRobots, action);

      expect(reducerResult).toEqual(robots);
    });
  });

  describe("When it receives currentRobots with 'Luis' & 'Marta', and deleteRobot action with id 2", () => {
    test("Then it should return robots 'Luis'", () => {
      const currentRobots = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: 1,
          name: "Luis",
          url: "",
        },
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: 2,
          name: "Marta",
          url: "",
        },
      ];

      const id = 2;

      const action = {
        type: actionsTypes.deleteRobot,
        id,
      };

      const expectedRobots = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: 1,
          name: "Luis",
          url: "",
        },
      ];

      const reducerResult = robotsReducer(currentRobots, action);

      expect(reducerResult).toEqual(expectedRobots);
    });
  });

  describe("When it receives currentRobots and a non existing action with robots 'Luis' and 'Marta'", () => {
    test("Then it should return currentRobots", () => {
      const currentRobots = [];

      const robots = [
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
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "2",
          name: "Marta",
          url: "",
        },
      ];

      const action = {
        type: actionsTypes.unexisting,
        robots,
      };

      const reducerResult = robotsReducer(currentRobots, action);

      expect(reducerResult).toEqual(currentRobots);
    });
  });

  describe("When it doesn't receive any robots nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = robotsReducer();

      expect(reducerResult).toHaveLength(0);
    });
  });
});
