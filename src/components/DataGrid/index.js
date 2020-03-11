import React from 'react';
import { Table } from 'semantic-ui-react';

import { StyledTable, StyledTableCell } from './style';
import { ArrowReverse, AscendDescend } from '../Icon';

const tableData = [
  {
    loadId: { value: '9931AJ2', width: 101 },
    status: { value: 'Rate needed', width: 133 },
    customer: { value: 'Morton International', width: 195 },
    pickRange: { value: '03/22/2019', width: 112 },
    shipper: { value: 'City Name', width: 127 },
    deliveryRange: { value: '03/22/2019', width: 144 },
    consignee: { value: 'Worthington', width: 145 },
    stops: { value: 2, width: 93 },
    weight: { value: 12, width: 94 },
    equip: { value: 'V', width: 86 },
    mileage: { value: 0, width: 98 },
    customerRate: { value: 0, width: 142 },
    targetPt: { value: '', width: 108 },
    am: { value: 'Worthington', width: 131 }
  },
  {
    loadId: { value: '9931AJ2', width: 101 },
    status: { value: 'Rate needed', width: 133 },
    customer: { value: 'Morton International', width: 195 },
    pickRange: { value: '03/22/2019', width: 112 },
    shipper: { value: 'City Name', width: 127 },
    deliveryRange: { value: '03/22/2019', width: 144 },
    consignee: { value: 'Worthington', width: 145 },
    stops: { value: 2, width: 93 },
    weight: { value: 12, width: 94 },
    equip: { value: 'V', width: 86 },
    mileage: { value: 0, width: 98 },
    customerRate: { value: 0, width: 142 },
    targetPt: { value: '', width: 108 },
    am: { value: 'Worthington', width: 131 }
  }
];

const headerRow = [
  { value: 'Load ID #', width: 101 },
  { value: 'Status', width: 133 },
  { value: 'Customer', width: 195 },
  { value: 'Pick Range', width: 112 },
  { value: 'Shipper', width: 127 },
  { value: 'Delivery Range', width: 144 },
  { value: 'Consignee', width: 145 },
  { value: 'Stops', width: 93 },
  { value: 'Weight', width: 94 },
  { value: 'Equip', width: 86 },
  { value: 'Mileage', width: 98 },
  { value: 'Customer Rate', width: 142 },
  { value: 'Target PT', width: 108 },
  { value: 'AM', width: 131 }
];

// const renderBodyRow = (
//   {
//     loadId,
//     status,
//     customer,
//     pickRange,
//     shipper,
//     deliveryRange,
//     consignee,
//     stops,
//     weight,
//     equip,
//     mileage,
//     customerRate,
//     targetPt,
//     am
//   },
//   i
// ) => ({
//   key: loadId || `row-${i}`,
//   cells: [
//     { key: 'loadId', content: loadId } || 'No Load Id specified',
//     { key: 'status', content: status } || 'No Status specified',
//     { key: 'customer', content: customer } || 'No Customer specified',
//     { key: 'pickRange', content: pickRange } || 'No Pick Range specified',
//     { key: 'shipper', content: shipper } || 'No Shipper specified',
//     { key: 'deliveryRange', content: deliveryRange } ||
//       'No Delivery Range specified',
//     { key: 'consignee', content: consignee } || 'No Load Id specified',
//     { key: 'stops', content: stops } || 'No Load Id specified',
//     { key: 'weight', content: weight } || 'No Load Id specified',
//     { key: 'equip', content: equip } || 'No Load Id specified',
//     { key: 'mileage', content: mileage } || 'No Load Id specified',
//     { key: 'customerRate', content: customerRate } || 'No Load Id specified',
//     { key: 'targetPt', content: targetPt } || 'No Load Id specified',
//     { key: 'am', content: am } || 'No Load Id specified'
//   ]
// });

const DataGrid = () => {
  return (
    <StyledTable sortable>
      <Table.Header className="custom-table-header">
        <Table.Row>
          <StyledTableCell
              className="custom-header-table-cell"
          >
            <ArrowReverse />
          </StyledTableCell>
          {headerRow.map(headerCellData => {
            const { width, value } = headerCellData;

            return (
              <StyledTableCell
                width={width}
                className="custom-header-table-cell"
              >
                <AscendDescend />
                <span>{value}</span>
              </StyledTableCell>
            );
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.map(tableRowData => {
          const cellsKeys = Object.keys(tableRowData);

          return (
            <Table.Row>
              {cellsKeys.map(cellKey => {
                const { value, width } = tableRowData[cellKey];

                return (
                  <StyledTableCell width={width}>
                    <span>{value}</span>
                  </StyledTableCell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </StyledTable>
  );
};

export default DataGrid;
