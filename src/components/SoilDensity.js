import React , { PropTypes } from 'react'
import { TextField } from 'material-ui'

import t from '../t'

const SoilDensity = (onChange) => (
  <TextField
      id="soil_density"
      hintText={ t("SOIL_DENSITY") }
      errorText={ t("REQUIRED_FIELD") }
      floatingLabelText={ t("SOIL_DENSITY") }
      type="number"
      onChange={ onChange }
  />
)

SoilDensity.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SoilDensity
