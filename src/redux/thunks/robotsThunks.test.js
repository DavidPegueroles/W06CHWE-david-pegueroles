import { getRobotsThunk } from "./robotsThunks";

describe("Given a loadTasksThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await getRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
