import React from 'react';
import SoilTable from '../components/SoilTable';
import { connect } from 'react-redux';

const getRequiredInputs = (state) => {
  let requiredInputs = {};
  Object.keys(state.optimizedSoilValues).forEach((id) => {
    let value = '-';
    if (state.readings[id] !== '') {
      value = state.optimizedSoilValues[id] - state.readings[id];
      if (value < 0) {
        value = '-';
      } else {
        value = value.toFixed(2);
      }
    }
    if (value === 'NaN') {
      value = '-';
    }
    requiredInputs[id] = value;
  });
  return requiredInputs;
}

const mapStateToProps = (state) => {
  return {
    optimizedSoilValues: state.optimizedSoilValues,
    requiredInputs: getRequiredInputs(state)
  };
};

const SoilReadings = connect(mapStateToProps)(SoilTable);

export default SoilReadings;
