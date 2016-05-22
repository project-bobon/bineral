import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const NumberField = (
  id,
  hintText = "",
  errorText = "",
  floatingLabelText = ""
) => (
  <TextField
      id={ id }
      hintText={ hintText }
      errorText={ errorText }
      floatingLabelText={ floatingLabelText }
      onChange={ onChange }
      type="number"
  />
)

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  floatingLabelText: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default NumberField
