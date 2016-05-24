import React from 'react';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReadingField from '../containers/ReadingField';
import t from '../t';
import labels from '../constants/labels';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const SoilTable = ({ optimizedSoilValues }) => {
  return(
    <section>
      <Table
          multiSelectable={ false }
          selectable={ false }
      >
        <TableHeader
            displaySelectAll={ false }
            adjustForCheckBox={ false }
            enableSelectAll={ false }
        >
          <TableRow>
            <TableHeaderColumn tooltip="Analysis result">Value</TableHeaderColumn>
            <TableHeaderColumn tooltip="Optimal value">Optimal Value</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={ false }
            showRowHover={ true }
        >
          { labels.map((l, index) => (
              <TableRow
                  key={ index }
                  className={ "soil-reading-row-" + l.id }
              >
                <TableRowColumn>
                  <ReadingField
                      id={ l.id }
                      floatingLabelText={ l.text + ' (' + l.unit + ')' }
                  /> { l.unit }
                </TableRowColumn>
                <TableRowColumn>
                  { typeof(optimizedSoilValues) !== "undefined" ? optimizedSoilValues[l.id] : "" }
                </TableRowColumn>
              </TableRow>
            )) }
        </TableBody>
      </Table>
    </section>
  );
};

export default SoilTable;
