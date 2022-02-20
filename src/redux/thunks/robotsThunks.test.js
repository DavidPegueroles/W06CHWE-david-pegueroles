import { getARobotThunk, getRobotsThunk } from "./robotsThunks";

describe("Given a getRobotsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await getRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a getARobotThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const id = 1;
      const getARobot = getARobotThunk(id);

      await getARobot(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
