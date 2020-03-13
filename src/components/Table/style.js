import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 1820px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const DynamicTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  min-width: 700px;
  overflow-x: overlay;
`;

export const StyledTable = styled.div`
  && {
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background-color: #fff;

    &.sticky-left {
      border-radius: 6px 0 0 6px;
    }

    &.dynamic-table {
      border-radius: 0 6px 6px 0;
      flex: 1;
      
       //.custom-cell {
       // width: unset;
       // min-width: unset;
       //}
    }

    .custom-table-header {
      background: #264259;

    }
  }
`;

export const StyledTableCell = styled.div`
  && {
    &.custom-cell {
      padding: 15px 21px 15px 11px;
      color: ${props => props.color || '#467599'};
      width: ${props => props.maxWidth}px;
      min-width: ${props => props.maxWidth}px;
      border-top: none;
      flex: 1;
      height: 50px;
      
      //:last-child {
      //  width: unset;
      //  min-width: unset;
      //  flex: 1;
      //}
      
      :first-child {
        paddingleft: 0;
      }
      
      &.toggle {
        padding: 15px 0 15px 11px;
      }

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

      .custom-checkbox {
        width: 22px;
        height: 22px;
        border-radius: 3px;
        border: solid 2px #b6c8d6;
        background-color: transparent;
        box-sizing: border-box;

        input:checked ~ label:before {
          background-color: #467599;
          color: #fff;
        }

        input:checked ~ label:after {
          color: #fff;
        }

        label {
          color: #467599;

          :before,
          :after {
            border: none;
            background-color: transparent;
            color: #467599;
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
          margin-right: 45px;
          margin-left: 12px;
        }
      }
    }
  }
`;

export const StyledTableRow = styled.div`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
`;
