import {
  deleteRobotThunk,
  getARobotThunk,
  getRobotsThunk,
} from "./robotsThunks";

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

describe("Given a deleteRobotThunk inner function", () => {
  describe("When it is called with id 1", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();
      const id = 1;

      const deleteThunk = deleteRobotThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with id 3", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const id = 3;

      const deleteThunk = deleteRobotThunk(id);

      await deleteThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
