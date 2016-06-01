import React from 'react';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import ReadingField from '../containers/ReadingField';
import labels from '../constants/labels';
import t from '../t';

const SoilTable = ({ optimizedSoilValues, requiredInputs }) => {
  return (
    <Table
      multiSelectable={ false }
      selectable={ false }
    >
      <TableHeader
        displaySelectAll={ false }
        adjustForCheckbox={ false }
        enableSelectAll={ false }
      >
        <TableRow>
          <TableHeaderColumn tooltip="Analysis result" style={ { paddingLeft: 0 } }>Value</TableHeaderColumn>
          <TableHeaderColumn tooltip="Optimal value">Optimal Value</TableHeaderColumn>
          <TableHeaderColumn tooltip="Optimal value">Require Input</TableHeaderColumn>
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
              <TableRowColumn style={ { paddingLeft: 0 } } >
                <ReadingField
                  id={ l.id }
                  floatingLabelText={ l.text + ' (' + l.unit + ')' }
                  style={ {minWidth: '100px'} }
                />
              </TableRowColumn>
              <TableRowColumn>
                { typeof(optimizedSoilValues) !== "undefined" ? optimizedSoilValues[l.id] : "-" }
              </TableRowColumn>
              <TableRowColumn>
                { requiredInputs[l.id] }
              </TableRowColumn>
            </TableRow>
          )) }
      </TableBody>
    </Table>
  );
};

export default SoilTable;
