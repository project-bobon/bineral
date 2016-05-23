import React from 'react';
import { TextField } from 'material-ui';
import t from '../t';

const OmClayPercentageField = ({ value, onChange }) => {
  return (
    <TextField
        id="soilOm"
        hintText={ t("OM_CLAY_PERCENTAGE") }
        errorText={ t("REQUIRED_FIELD") }
        floatingLabelText={ t("OM_CLAY_PERCENTAGE") }
        onChange={ onChange }
        value={ value }
        type="number"
    />
  );
};

export default OmClayPercentageField;
