import { UPDATE_READING } from '../constants/actionTypes';
import { getOptimizedSoilValues } from '../helpers';

const initialState = [
  { id: 'omClayPercentage', value: '' },
  { id: 'soilDensity', value: '' },
  { id: 'soilOm', value: '' },
  { id: 'soilN', value: '' },
  { id: 'soilP2o5', value: '' },
  { id: 'soilK', value: '' },
  { id: 'soilCa', value: '' },
  { id: 'soilMg', value: '' },
  { id: 'soilCation', value: '' }
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
