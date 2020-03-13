import React, { useState, useEffect } from 'react';
import { Checkbox } from 'semantic-ui-react';

import {
  Container,
  DynamicTableContainer,
  StyledTable,
  StyledTableCell,
  StyledTableRow
} from './style';
import { ArrowReverse, AscendDescend, Toggle } from '../Icon';
import { mergeClassNames } from '../../utils/styles';

const CustomTable = ({
  stickyHeaderRow,
  stickyTableData,
  dynamicHeaderRow,
  dynamicTableData,
  handleSort
}) => {
  const [selectedRows, selectRow] = useState([]);

  const selectAllRowsHandler = () => {
    if (selectedRows.length === stickyTableData.length){
      selectRow([])
    } else {
      selectRow([...stickyTableData.keys()])
    }
  };

  return (
    <Container>
      {/*  Sticky table */}
      <StyledTable sortable className="sticky-left">
        <div className="custom-table-header">
          <StyledTableRow>
            <StyledTableCell
              maxWidth={61}
              className="custom-cell custom-cell-with-icon first-column header"
            >
              <Checkbox
                checked={selectedRows.length === stickyTableData.length}
                className="custom-checkbox"
                onClick={selectAllRowsHandler}
              />
              <ArrowReverse />
            </StyledTableCell>
            {stickyHeaderRow.map(headerCellData => {
              const { width, value, id } = headerCellData;

              return (
                <StyledTableCell
                  maxWidth={width}
                  className="custom-cell custom-header-table-cell"
                >
                  <div className="ascend-icon" onClick={() => handleSort(id)}>
                    <AscendDescend />
                  </div>
                  <span>{value}</span>
                </StyledTableCell>
              );
            })}
          </StyledTableRow>
        </div>

        <div>
          {stickyTableData.map((tableRowData, index) => {
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
                  maxWidth={46}
                  className="custom-cell custom-cell-with-icon toggle"
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
        </div>
      </StyledTable>

      {/* Dynamic table */}
      <DynamicTableContainer>
        <StyledTable sortable className="dynamic-table">
          <div className="custom-table-header">
            <StyledTableRow>
              {dynamicHeaderRow.map(headerCellData => {
                const { width, value, id } = headerCellData;

                return (
                  <StyledTableCell
                    maxWidth={width}
                    className="custom-cell custom-header-table-cell"
                  >
                    <div className="ascend-icon" onClick={() => handleSort(id)}>
                      <AscendDescend />
                    </div>
                    <span>{value}</span>
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          </div>

          <div>
            {dynamicTableData.map((tableRowData, index) => {
              const cellsKeys = Object.keys(tableRowData);

              return (
                <StyledTableRow>
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
                      <StyledTableCell
                        className={cellClassName}
                        maxWidth={width}
                      >
                        <span className={textClassName}>{value}</span>
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </div>
        </StyledTable>
      </DynamicTableContainer>
    </Container>
  );
};

export default CustomTable;
