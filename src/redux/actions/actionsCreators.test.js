import actionsTypes from "./actionsTypes";
import { getRobotsAction } from "./actionsCreators";

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
