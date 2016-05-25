import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = [
  { id: 'soilOm', value: '' },
  { id: 'soilN', value: '' },
  { id: 'soilP2o5', value: '' },
  { id: 'soilK', value: '' },
  { id: 'soilCa', value: '' },
  { id: 'soilMg', value: '' },
  { id: 'soilCation', value: '' }
];

const getRequiredInput = (state, action) => {
  if (action.id === 'omClayPercentage' || action.id === 'soilDensity') {
    return '';
  } else {
    let omClayPercentage = state.find(
      (v) => v.id === 'omClayPercentage'
    ).value;
    let optimizedValues = getOptimizedSoilValues(omClayPercentage);
    let requiredInput = '';
    if (typeof(optimizedValues[action.id]) !== 'undefined') {
      requiredInput = optimizedValues[action.id] - action.value;
      if (requiredInput < 0) {
        requiredInput = '';
      }
    }
    return requiredInput;
  }
};

const requiredInput = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      // Update field value.
      let index = state.findIndex((r) => r.id === action.id);
      if (typeof(index) === 'undefined') {
        return state;
      } else {
        let requiredInput = getRequiredInput(state, action);
        return [
          ...state.slice(0, index),
          { id: action.id, value: requiredInput }, 
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
};

export default requiredInput;
