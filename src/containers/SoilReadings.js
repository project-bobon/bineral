import React from 'react';
import SoilTable from '../components/SoilTable';
import { connect } from 'react-redux';

const getRequiredInputs = (state) => {
  let requiredInputs = {};
  Object.keys(state.optimizedSoilValues).forEach((id) => {
    let value = '';
    if (state.readings.find((v) => v.id === id).value !== '') {
      value = state.optimizedSoilValues[id] - state.readings.find((v) => v.id === id).value;
      if (value < 0) {
        value = '';
      } else {
        value = value.toPrecision(3);
      }
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
