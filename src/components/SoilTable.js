import React from 'react';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import t from '../t';
import OmClayPercentage from './OmClayPercentage';
import SoilDensity from './SoilDensity';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class SoilTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      om_clay_p: 0,
      soil_density: 0
    }
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return(
     <section>
        <OmClayPercentage />
        <SoilDensity />
      </section>
    );
  }
}

export default SoilTable;
