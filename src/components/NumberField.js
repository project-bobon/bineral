import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const NumberField = ({
  id,
  onChange = () => {},
  hintText = '',
  errorText = '',
  floatingLabelText = '',
  type = 'number'
}) => (
  <TextField
      id={ id }
      hintText={ hintText }
      errorText={ errorText }
      floatingLabelText={ floatingLabelText }
      type={ type }
      onChange={ onChange }
      fullWidth={ true }
  />
);

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  floatingLabelText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default NumberField;
