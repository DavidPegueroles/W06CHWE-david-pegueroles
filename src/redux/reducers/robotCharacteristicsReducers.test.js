import actionsTypes from "../actions/actionsTypes";
import robotCharacteristicsReducers from "./robotCharacteristicsReducers";

describe("Given a robotCharacteristicsReducers function", () => {
  describe("When it receives currentCharacteristics and robotCharacteristics action with characteristics'", () => {
    test("Then it should return robot characteristics", () => {
      const currentCharacteristics = [];

      const characteristics = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
        },
      ];

      const action = {
        type: actionsTypes.robotCharacteristics,
        characteristics,
      };

      const reducerResult = robotCharacteristicsReducers(
        currentCharacteristics,
        action
      );

      expect(reducerResult).toEqual(characteristics);
    });
  });

  describe("When it receives currentCharacteristics and a non existing action with characteristics", () => {
    test("Then it should return currentCharacteristics", () => {
      const currentCharacteristics = [];

      const characteristics = {
        characteristics: {
          velocity: 9,
          resistance: 7,
          creation_date: "",
        },
      };

      const action = {
        type: actionsTypes.unexisting,
        characteristics,
      };

      const reducerResult = robotCharacteristicsReducers(
        currentCharacteristics,
        action
      );

      expect(reducerResult).toEqual(currentCharacteristics);
    });
  });

  describe("When it doesn't receive any characteristics nor action", () => {
    test("Then it should return an empty array", () => {
      const reducerResult = robotCharacteristicsReducers();

      expect(reducerResult).toHaveLength(0);
    });
  });
});
