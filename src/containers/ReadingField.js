import React from 'react';
import NumberField from '../components/NumberField';
import { connect } from 'react-redux';
import { updateReading } from '../actions';
import debounce from 'debounce';

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
    id: ownProps.id,
    hintText: ownProps.hintText,
    errorText: ownProps.errorText,
    floatingLabelText: ownProps.floatingLabelText,
    isRequired: false,
    type: 'number',
    value: getValueFromState(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(updateReading(ownProps.id, e.target.value));
    }
  };
};

const ReadingField = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberField);

export default ReadingField;
