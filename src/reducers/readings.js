import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = [
  { id: 'omClayPercentage', value: 0, requiredInput: '' },
  { id: 'soilDensity', value: 0, requiredInput: '' },
  { id: 'soilOm', value: 0, requiredInput: '' },
  { id: 'soilN', value: 0, requiredInput: '' },
  { id: 'soilP2o5', value: 0, requiredInput: '' },
  { id: 'soilK', value: 0, requiredInput: '' },
  { id: 'soilCa', value: 0, requiredInput: '' },
  { id: 'soilMg', value: 0, requiredInput: '' },
  { id: 'soilCation', value: 0, requiredInput: '' }
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
}

const readings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      // Update field value.
      let index = state.findIndex((r) => r.id === action.id);
      let requiredInput = getRequiredInput(state, action);
      return [
        ...state.slice(0, index),
        { id: action.id, value: action.value, requiredInput }, 
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default readings;
