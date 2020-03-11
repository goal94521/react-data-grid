import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

export const StyledTable = styled(Table)`
  && {
    margin: 0;
    
    .custom-table-header {
      background: #264259;
    }
  }
`;

export const StyledTableCell = styled(Table.Cell)`
  && {
    &.custom-cell {
      padding: 15px 21px 15px 11px;
      color: ${props => props.color || '#467599'};
      // max-width: ${props => props.maxWidth}px;
      width: ${props => props.maxWidth}px;
      border-top: none;

      &.load-id {
        color: #80c17d;
        font-weight: 600;
      }

      &.load-id,
      &.delivery-range,
      &.stops,
      &.weight,
      &.mileage,
      &.customer-rate {
        text-align: end;
      }

      span {
        &.status {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 111px;
          height: 28px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.1px;

          &.green {
            border: solid 2px #41cc79;
            color: #41cc79;
          }

          &.red {
            border: solid 2px #ff7979;
            color: #ff7979;
          }

          &.blue {
            border: solid 2px #00adff;
            color: #00adff;
          }
        }
      }
    }

    &.custom-header-table-cell {
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
      padding: 15px 0;

      svg {
        margin-right: 5px;
      }
    }

    &.custom-cell-with-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin: 0 4px;
      }

      &.first-column {
        justify-content: center;
        margin-left: 2px;
        padding: 0;

        &.header {
          margin-right: 50px;
          margin-left: 12px;
        }
      }
    }
  }
`;

export const StyledTableRow = styled(Table.Row)`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1820px;
  }
`;
