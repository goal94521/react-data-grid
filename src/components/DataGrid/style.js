import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

export const StyledTable = styled(Table)`
  .custom-table-header {
    background: #264259;
  }
`;

export const StyledTableCell = styled(Table.Cell)`
  && {
  padding: 15px 0;
  color: #467599;
  
    &.custom-header-table-cell {
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
      flex-direction: row;
      border: 1px solid #264259;
      padding: 15px 0;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
