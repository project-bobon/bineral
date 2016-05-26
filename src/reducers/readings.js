import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = {
  omClayPercentage: 0,
  soilDensity: 0,
  soilOm: 0,
  soilN: 0,
  soilP2o5: 0,
  soilK: 0,
  soilCa: 0,
  soilMg: 0,
  soilCation: 0,
  soilDepth: 20
};

const readings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      let newState = {};
      newState[action.id] = parseFloat(action.value);
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};

export default readings;
