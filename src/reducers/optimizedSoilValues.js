import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = getOptimizedSoilValues();

const optimizedSoilValues = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      if (action.id === "omClayPercentage") {
        return getOptimizedSoilValues(action.value);
      }
    default:
      return state;
  }
};

export default optimizedSoilValues;
