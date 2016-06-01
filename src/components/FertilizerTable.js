import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const FertilizerTable = ({ fertilizers }) => (
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
        <TableHeaderColumn
          tooltip="Fertilizer"
          style={ {
              paddingLeft: 0
            } }
        >
          Fertilizer
        </TableHeaderColumn>
        <TableHeaderColumn tooltip="Optimal value">Require Input</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={ false }
      showRowHover={ true }
    >
      { fertilizers.map(f => {
          return(
            <TableRow
              key={ f.id }
            >
              <TableRowColumn style={ {paddingLeft: 0} }>
                { f.id }
              </TableRowColumn>
              <TableRowColumn>
                { (f.value / 1000).toFixed(0) + ' kg / ha'}
              </TableRowColumn>
            </TableRow>
          );
        }) }
    </TableBody>
  </Table>
);

export default FertilizerTable;
