import React from 'react';
import SoilTable from '../components/SoilTable';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    optimizedSoilValues: state.optimizedSoilValues
  };
};

const SoilReadings = connect(mapStateToProps)(SoilTable);

export default SoilReadings;
