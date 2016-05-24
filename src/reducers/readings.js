import { UPDATE_READING } from '../constants/actionTypes';

const initialState = [
  { id: 'omClayPercentage', value: 0, requiredInput: '' },
  { id: 'soilDensity', value: 0, requiredInput: '' },
  { id: 'soilOm', value: 0, requiredInput: '' },
  { id: 'soilN', value: 0, requiredInput: '' },
  { id: 'soilP2o5', value: 0, requiredInput: '' },
  { id: 'soilK', value: 0, requiredInput: '' },
  { id: 'soilCa', value: 0, requiredInput: '' },
  { id: 'soilMg', value: 0, requiredInput: '' },
];

const readings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      // Update field value.
      let index = state.findIndex((r) => r.id === action.id);
      return [
        ...state.slice(0, index),
        { id: action.id, value: action.value }, 
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default readings;
