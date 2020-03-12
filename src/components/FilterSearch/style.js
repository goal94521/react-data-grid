import styled from 'styled-components';

export const Container = styled.div`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    padding: 40px 20px 20px 20px;
    background: #b6c8d6;

    span {
      color: #467599;
    }

    .heading {
      font-size: 16px;
      margin-bottom: 10px;
      text-align: left;
      color: #467599;
    }

    .list {
      display: flex;
      overflow: auto;
      flex-direction: column;
      width: 100%;
      height: 450px;
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 50px;
      color: #467599;
    }

    .custom-checkbox {
      width: 22px;
      height: 22px;
      border-radius: 3px;
      border: solid 2px #467599;
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

    .item-text {
      font-size: 16px;
      margin-left: 20px;
    }

    .success-button {
      display: flex;
      text-align: center;
      justify-content: center;
      width: 130px;
      height: 40px;
      margin-left: auto;
      background: #80c17d;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin-top: 15px;
    }

    .custom-select {
      height: 50px;
    }

    .close-icon {
      position: absolute;
      top: 10px;
      right: 5px;
    }

    .flex-row {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;

      .custom-select {
        width: 25%;
        min-width: unset;
      }

      .custom-input {
        width: 25%;
        min-width: unset;
      }

      .custom-text {
        width: 25%;
      }
    }

    .start-over {
      color: #80c17d;
      height: 40px;
      background: transparent;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
    
    .blue-button {
      color: #fff;
      height: 40px;
      background: transparent;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }
`;
