import actionsTypes from "../actions/actionsTypes";

const robotCharacteristicsReducers = (characteristics = [], action = {}) => {
  let newCharacteristics;

  switch (action.type) {
    case actionsTypes.robotCharacteristics:
      newCharacteristics = action.characteristics;
      break;
    default:
      newCharacteristics = characteristics;
  }

  return newCharacteristics;
};

export default robotCharacteristicsReducers;
