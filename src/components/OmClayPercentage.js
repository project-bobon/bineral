import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

import t from '../t';

const OmClayPercentage = (onChange) => (
  <TextField
      id="om_clay_p"
      hintText={ t("OM_CLAY_PERCENTAGE") }
      errorText={ t("REQUIRED_FIELD") }
      floatingLabelText={ t("OM_CLAY_PERCENTAGE") }
      type="number"
      onchange={ onChange }
  />
)

OmClayPercentage.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default OmClayPercentage
