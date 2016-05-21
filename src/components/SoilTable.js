import React from 'react';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class SoilTable extends React.Component {
  render() {
    return(
      <section>
        <TextField
            id="om_clay_p"
            hintText="OM - Soil percentage"
            errorText="This field is required"
            floatingLabelText="OM - Soil Percentage"
            type="number"
        />
        <TextField
            id="soil_density"
            hintText="OM - Soil density"
            errorText="This field is required"
            floatingLabelText="OM - Soil Density"
            type="number"
        />
      </section>
    );
  }
}

export default SoilTable;
