import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const NumberField = ({
  id,
  onChange = () => {},
  hintText = '',
  errorText = '',
  floatingLabelText = '',
  style = {},
  inputStyle = {},
  underlineShow = true,
  fullWidth = false,
  type = 'number'
}) => (
  <TextField
      id={ id }
      hintText={ hintText }
      errorText={ errorText }
      floatingLabelText={ floatingLabelText }
      type={ type }
      onChange={ onChange }
      style={ style }
      inputStyle={ inputStyle }
      underlineShow={ underlineShow }
      fullWidth={ fullWidth }
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
