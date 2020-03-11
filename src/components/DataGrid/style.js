import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1820px;
  width: 100%;
`;

export const Header = styled.div`
  && {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    padding: 0 16px;
    align-items: center;

    .secondary-text {
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      color: #536476;
    }

    .custom-search-input {
      width: 240px;
      height: 50px;
      border-radius: 6px;
      border: solid 2px #dde4eb;
      background-color: #ffffff;
      margin: 0 20px;
    }

    .show-filters-button {
      color: #80c17d;
      height: 50px;
      width: 136px;
      background: #fff;

      svg {
        margin-left: 10px;
      }
    }
  }
`;
