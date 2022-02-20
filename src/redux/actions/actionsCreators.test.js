import actionsTypes from "./actionsTypes";
import {
  deleteRobotAction,
  getARobotAction,
  getRobotsAction,
  robotCharacteristicsAction,
} from "./actionsCreators";

describe("Given a getRobotsAction function", () => {
  describe("When it receives robots 'Luis' and 'Marta'", () => {
    test("Then the action should have 'Luis' and 'Marta'", () => {
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

      const expectedAction = {
        type: actionsTypes.getRobots,
        robots,
      };

      const action = getRobotsAction(robots);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a getARobotAction function", () => {
  describe("When it receives the robot 'Luis'", () => {
    test("Then the action should have 'Luis' robot", () => {
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

      const expectedAction = {
        type: actionsTypes.getARobot,
        robot,
      };

      const action = getARobotAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a robotCharacteristicsAction function", () => {
  describe("When it receives the characteristics object", () => {
    test("Then the action should have characteristics object", () => {
      const characteristics = {
        characteristics: {
          velocity: 9,
          resistance: 7,
          creation_date: "",
        },
      };

      const expectedAction = {
        type: actionsTypes.robotCharacteristics,
        characteristics,
      };

      const action = robotCharacteristicsAction(characteristics);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteRobotAction function", () => {
  describe("When it receives id 1", () => {
    test("Then it should return action with id 1", () => {
      const id = 1;

      const expectedAction = {
        type: actionsTypes.deleteRobot,
        id,
      };

      const action = deleteRobotAction(id);

      expect(expectedAction).toEqual(action);
    });
  });
});
