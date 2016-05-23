import React from 'react';
import OmClayPercentageField from '../components/OmClayPercentageField';
import { connect } from 'react-redux';
import {
  updateReading,
  updateOmClayPercentage
} from '../actions';

const getValueFromState = (state, ownProps) => {
  let val;
  let field = state.readings.find(item => item.id === ownProps.id);
  if (typeof(field) !== "undefined") {
    val = field.value;
  }
  return val;
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: getValueFromState(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(updateReading("omClayPercentage", e.target.value));
    }
  };
};

const OmClayPercentage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OmClayPercentageField);

export default OmClayPercentage;
