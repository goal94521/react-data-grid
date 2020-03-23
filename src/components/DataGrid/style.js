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
      width: 200px;
      height: 50px;
      background: #fff;
      font-size: 18px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 24px;
      letter-spacing: normal;
      font-family: SourceSansPro, sans-serif;

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
  position: relative;

  span {
    margin-right: 20px;
  }
  
  .settings-icon {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .settings-dropdown {
    position: absolute;
    top: 50px;
    left: 43px;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    background: #fff;
    cursor: auto;
    outline: 0;
    margin: 0;
    padding: 0 0;
    font-size: 1em;
    text-shadow: none;
    text-align: left;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.28571429rem;
    transition: opacity 0.1s ease;
    z-index: 11;
  }

  .settings-dropdown-item {
    width: 200px;
    height: auto;
    cursor: pointer;
    display: block;
    border: none;
    text-align: left;
    line-height: 1em;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.78571429rem 1.14285714rem;
    font-size: 1rem;
    text-transform: none;
    font-weight: 400;
    box-shadow: none;

    :hover {
      background: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.95);
    }
  }

  .right-arrow {
    margin: 0 20px 0 20px;
  }
`;
