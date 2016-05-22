import reading from './reading';
import {
  UPDATE_DATA,
  SWITCH_LANGUAGE
} from '../constants/actionTypes';

const initialState = [
  {
    id: 'OM',
    value: 0
  },
  {
    id: 'N',
    value: 0
  },
  {
    id: 'P2O5',
    value: 0
  },
  {
    id: 'K',
    value: 0
  },
  {
    id: 'Ca',
    value: 0
  },
  {
    id: 'Mg',
    value: 0
  }
];

const reading = (state, action) => {
  switch (action.type) {
    case 'UPDATE_READING':
      if (state.id !=== action.id) {
        return state;
      }
      return {
        ...state,
        value: action.value
      };
  }
}

const readings = (state = initialState, action) => {
  if (typeof(state) === "undefined") {
    state = initialState;
  }
  switch (action.type) {
    case UPDATE_DATA:
      return state.map(t => {
        reading(t, action);
      });
    default:
      return state;
  };
};

export default readings;

