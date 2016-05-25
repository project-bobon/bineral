import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = {
  'omClayPercentage': '',
  'soilDensity': '',
  'soilOm': '',
  'soilN': '',
  'soilP2o5': '',
  'soilK': '',
  'soilCa': '',
  'soilMg': '',
  'soilCation': ''
};

const readings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      let newState = {};
      newState[action.id] = action.value;
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};

export default readings;
