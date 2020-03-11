import React, { useState } from 'react';
import { Table, Checkbox } from 'semantic-ui-react';

import { StyledTable, StyledTableCell, StyledTableRow } from './style';
import { ArrowReverse, AscendDescend, CheckBoxOpen, Toggle } from '../Icon';
import { mergeClassNames } from '../../utils/styles';

const tableData = [
  {
    loadId: { value: '9931AJ2', width: 101, id: 'loadId' },
    status: { value: 'Rate needed', width: 133, id: 'status', status: 'green' },
    customer: { value: 'Morton International', width: 195, id: 'customer' },
    pickRange: { value: '03/22/2019', width: 112, id: 'pickRange' },
    shipper: { value: 'City Name', width: 127, id: 'shipper' },
    deliveryRange: { value: '03/22/2019', width: 144, id: 'deliveryRange' },
    consignee: { value: 'Worthington', width: 145, id: 'consignee' },
    stops: { value: 2, width: 93, id: 'stops' },
    weight: { value: 12, width: 94, id: 'weight' },
    equip: { value: 'V', width: 86, id: 'equip' },
    mileage: { value: 0, width: 98, id: 'mileage' },
    customerRate: { value: 0, width: 142, id: 'customerRate' },
    targetPt: { value: '', width: 108, id: 'targetPt' },
    am: { value: 'Worthington', width: 131, id: 'am' }
  },
  {
    loadId: { value: '9931AJ2', width: 101, id: 'loadId' },
    status: { value: 'Rate needed', width: 133, id: 'status', status: 'red' },
    customer: { value: 'Morton International', width: 195, id: 'customer' },
    pickRange: { value: '03/22/2019', width: 112, id: 'pickRange' },
    shipper: { value: 'City Name', width: 127, id: 'shipper' },
    deliveryRange: { value: '03/22/2019', width: 144, id: 'deliveryRange' },
    consignee: { value: 'Worthington', width: 145, id: 'consignee' },
    stops: { value: 2, width: 93, id: 'stops' },
    weight: { value: 12, width: 94, id: 'weight' },
    equip: { value: 'V', width: 86, id: 'equip' },
    mileage: { value: 0, width: 98, id: 'mileage' },
    customerRate: { value: 0, width: 142, id: 'customerRate' },
    targetPt: { value: '', width: 108, id: 'targetPt' },
    am: { value: 'Worthington', width: 131, id: 'am' }
  },
  {
    loadId: { value: '9931AJ2', width: 101, id: 'loadId' },
    status: { value: 'Rate needed', width: 133, id: 'status', status: 'blue' },
    customer: { value: 'Morton International', width: 195, id: 'customer' },
    pickRange: { value: '03/22/2019', width: 112, id: 'pickRange' },
    shipper: { value: 'City Name', width: 127, id: 'shipper' },
    deliveryRange: { value: '03/22/2019', width: 144, id: 'deliveryRange' },
    consignee: { value: 'Worthington', width: 145, id: 'consignee' },
    stops: { value: 2, width: 93, id: 'stops' },
    weight: { value: 12, width: 94, id: 'weight' },
    equip: { value: 'V', width: 86, id: 'equip' },
    mileage: { value: 0, width: 98, id: 'mileage' },
    customerRate: { value: 0, width: 142, id: 'customerRate' },
    targetPt: { value: '', width: 108, id: 'targetPt' },
    am: { value: 'Worthington', width: 131, id: 'am' }
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

const CustomTable = () => {
  const [selectedRows, selectRow] = useState([]);

  return (
    <StyledTable sortable>
      <Table.Header className="custom-table-header">
        <StyledTableRow>
          <StyledTableCell
            maxWidth={61}
            className="custom-cell custom-cell-with-icon first-column header"
          >
            <Checkbox
              checked={selectedRows.length === tableData.length}
              className="custom-checkbox"
              onClick={() => selectRow([...tableData.keys()])}
            />
            <ArrowReverse />
          </StyledTableCell>
          {headerRow.map(headerCellData => {
            const { width, value } = headerCellData;

            return (
              <StyledTableCell
                maxWidth={width}
                className="custom-cell custom-header-table-cell"
              >
                <AscendDescend />
                <span>{value}</span>
              </StyledTableCell>
            );
          })}
        </StyledTableRow>
      </Table.Header>

      <Table.Body>
        {tableData.map((tableRowData, index) => {
          const cellsKeys = Object.keys(tableRowData);

          return (
            <StyledTableRow>
              <StyledTableCell
                maxWidth={61}
                className="custom-cell custom-cell-with-icon first-column"
              >
                <Checkbox
                  checked={selectedRows.includes(index)}
                  className="custom-checkbox"
                  onClick={() => {
                    console.log('bhbhbhbh')
                    if (selectedRows.includes(index)) {
                      const updatedRows = selectedRows.filter(
                        value => value !== index
                      );
                      selectRow(updatedRows);
                    } else {
                      selectRow(prevState => [...prevState, index]);
                    }
                  }}
                />
              </StyledTableCell>
              <StyledTableCell
                maxWidth={61}
                className="custom-cell custom-cell-with-icon first-column"
              >
                <Toggle />
              </StyledTableCell>
              {cellsKeys.map(cellKey => {
                const { value, width, id, status } = tableRowData[cellKey];

                const cellClassName = mergeClassNames(
                  'custom-cell',
                  id === 'loadId' && 'load-id',
                  id === 'deliveryRange' && 'delivery-range',
                  id === 'stops' && 'stops',
                  id === 'weight' && 'weight',
                  id === 'mileage' && 'mileage',
                  id === 'customerRate' && 'customer-rate'
                );

                const textClassName = mergeClassNames(
                  id === 'status' && 'status',
                  status
                );

                return (
                  <StyledTableCell className={cellClassName} maxWidth={width}>
                    <span className={textClassName}>{value}</span>
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          );
        })}
      </Table.Body>
    </StyledTable>
  );
};

export default CustomTable;
