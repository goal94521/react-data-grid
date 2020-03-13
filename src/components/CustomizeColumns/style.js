import styled from 'styled-components';

export const Container = styled.div`
  && {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 899px;
    height: 899px;
    padding: 45px 33px;
    background: #ecf2f6;
    box-shadow: -5px 0 14px -2px rgba(0, 0, 0, 0.65);

    .heading {
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.85;
      letter-spacing: normal;
      color: #6d7c8b;
      margin-bottom: 37px;
      text-align: left;
    }

    // wide list mode
    .lists-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      margin-bottom: 25px;
      height: 560px;
    }

    .list {
      display: flex;
      overflow: auto;
      flex-direction: column;
      width: 100%;
      height: 560px;
      margin: 0 10px;

      :first-of-type {
        margin-left: 0;
      }

      :last-of-type {
        margin-right: 0;
      }

      &.single-list {
        padding-right: 33px;
        margin: 0 0 20px 0;
      }

      ::-webkit-scrollbar {
        width: 6px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #7e92a3;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #7e92a3;
      }
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 350px;
      min-height: 47px;
      background: #dbe8f1;
      border-radius: 6px;
      margin: 5px 0;
      padding: 0 22px 0 19px;

      :first-child {
        margin-top: 0;
      }

      :last-child {
        margin-bottom: 0;
      }

      span {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.94;
        letter-spacing: normal;
        color: #6d7c8b;
        margin-left: 30px;
      }
      
      .delete-icon {
        margin-left: auto;
        display: flex;
        align-items: center;
      }
    }

    .custom-select {
      display: flex;
      align-items: center;
      height: 50px;
      border-radius: 6px;
      border: solid 2px #dde4eb;
      background-color: #ffffff;
      width: 100%;

      &.wide-mode {
        width: 359px;
        align-self: flex-end;
      }

      i {
        &.dropdown {
          &.icon {
            top: 16px;
          }
        }
      }
    }

    .row-buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;
    }

    .cancel-button {
      width: 127px;
      height: 50px;
      border-radius: 6px;
      border: solid 2px #467599;
      background-color: #ffffff;
      color: #467599;
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      padding: 0;
    }

    .success-button {
      width: 140px;
      height: 50px;
      border-radius: 6px;
      background-color: #80c17d;
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      padding: 0;
      margin-left: 20px;
    }

    .close-icon {
      position: absolute;
      top: 25px;
      right: 24px;
    }
  }
`;
