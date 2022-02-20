import actionsTypes from "../actions/actionsTypes";

const robotCharacteristicsReducers = (characteristics = [], action = {}) => {
  let newCharacteristics;

  if (action.type === actionsTypes.robotCharacteristics) {
    newCharacteristics = action.characteristics;
  } else {
    newCharacteristics = characteristics;
  }

  return newCharacteristics;
};

export default robotCharacteristicsReducers;
