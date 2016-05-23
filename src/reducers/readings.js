import { UPDATE_READING } from '../constants/actionTypes';

const initialState = [
  { id: 'omClayPercentage', value: 0 },
  { id: 'soilOm', value: 0 },
  { id: 'soilN', value: 0 },
  { id: 'soilP2o5', value: 0 },
  { id: 'soilK', value: 0 },
  { id: 'soilCa', value: 0 },
  { id: 'soilMg', value: 0 },
];

const readings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_READING:
      // Update field value.
      let index;
      state.forEach((r, i) => {
        if (r.id === action.id) {
          index = i;
        }
      });
      if (typeof(index) === 'undefined') {
        return [
          ...state,
          { id: action.id, value: action.value }
        ];
      } else {
        return [
          ...state.slice(0, index),
          state[index] + 1,
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
};

export default readings;
