import { combineReducers } from 'redux';
import readings from './readings';
import optimizedSoilValues from './optimizedSoilValues';

const bineralApp = combineReducers({
  readings,
  optimizedSoilValues
});

export default bineralApp;
