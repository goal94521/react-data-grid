import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1820px;
  min-width: 930px;
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
      background: #fff;
      font-size: 18px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  height: 100%;
  align-items: center;

  span {
    margin-right: 20px;
  }

  .settings-dropdown {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  
  .settings-dropdown-menu {
    width: 200px;
  }
`;
