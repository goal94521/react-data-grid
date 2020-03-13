import React, { useEffect, useState } from 'react';
import { Input, Button, Icon, Dropdown } from 'semantic-ui-react';

import CustomTable from '../Table';
import { Container, Header, PaginationContainer } from './style';
import { Filter, LeftProgress, RightProgress, Settings } from '../Icon';
import CustomizeColumns from '../CustomizeColumns';
import {
  stickyHeaderRow,
  stickyTableData,
  dynamicHeaderRow,
  dynamicTableData
} from '../../__mock__';

const settingsDropdownItems = [
  {
    id: 'download',
    title: 'Download'
  },
  {
    id: 'showNumberOfPages',
    title: 'Show # of Pages'
  },
  {
    id: 'infiniteScroll',
    title: 'Infinite Scroll'
  },
  {
    id: 'compactGrid',
    title: 'Compact Grid'
  },
  {
    id: 'customizeColumns',
    title: 'Customize Columns'
  }
];

const DataGrid = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openModalId, setOpenModalId] = useState('');

  const handleDropdownPress = dropdownId => {
    console.log('here');
    switch (dropdownId) {
      case 'customizeColumns':
        setOpenModalId(dropdownId);
    }
  };

  const [paginationState, setPaginationState] = useState({
    currentPage: 1,
    limit: 15
  });

  const indexOfLastRow = paginationState.currentPage * paginationState.limit;
  const indexOfFirstRow = indexOfLastRow - paginationState.limit;

  const [currentDynamicRows, setCurrentDynamicRows] = useState(
    dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
  );
  const [currentStickyRows, setCurrentStickyRows] = useState(
    dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
  );

  useEffect(() => {
    if (paginationState.currentPage) {
      console.log(
        dynamicTableData.slice(indexOfFirstRow, indexOfLastRow),
        'here1'
      );
      setCurrentDynamicRows(
        dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setCurrentStickyRows(
        stickyTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
    }
  }, [paginationState]);

  const totalItemsCount = dynamicTableData.length;
  const numberOfItemsPerPage = 15;
  // var page = 3;

  const numberOfPages = Math.floor(
    (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
  );
  // var start = (page * numberOfItemsPerPage) - (numberOfItemsPerPage - 1);
  // var end = Math.min(start + numberOfItemsPerPage - 1, totalItemsCount);

  const moveForward = () => {
    console.log(numberOfPages, 'number of pages');
    if (paginationState.currentPage + 1 <= numberOfPages) {
      console.log('here');
      setPaginationState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage + 1
      }));
    }
  };

  const moveBack = () => {
    console.log(numberOfPages, 'number of pages2');
    if (paginationState.currentPage !== 1) {
      console.log('here');
      setPaginationState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage - 1
      }));
    }
  };

  return (
    <Container>
      <Header>
        <span className="secondary-text">3 Customer Ratings</span>
        <Input icon placeholder="Search..." className="custom-search-input">
          <input />
          <Icon name="search" size="large" />
        </Input>
        <Button icon className="show-filters-button">
          Show Filters
          <Filter />
        </Button>
        <PaginationContainer>
          <span className="secondary-text">3-3 of 105 Results</span>
          <div onClick={() => moveBack()}>
            <LeftProgress />
          </div>
          <div onClick={() => console.log('1')} style={{ width: 10 }} />
          <div onClick={() => moveForward()}>
            <RightProgress />
          </div>
          <div style={{ width: 20 }} />
          <Dropdown
            className="settings-dropdown"
            direction="left"
            onClick={() => setShowDropdown(!showDropdown)}
            icon={<Settings />}
          >
            <Dropdown.Menu className="settings-dropdown-menu">
              {settingsDropdownItems.map(dropdownItem => (
                <Dropdown.Item
                  onClick={() => handleDropdownPress(dropdownItem.id)}
                >
                  {dropdownItem.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </PaginationContainer>
      </Header>
      <CustomTable
        dynamicHeaderRow={dynamicHeaderRow}
        stickyHeaderRow={stickyHeaderRow}
        dynamicTableData={currentDynamicRows}
        stickyTableData={currentStickyRows}
      />
      {/* modals start */}
      {openModalId === 'customizeColumns' && (
        <CustomizeColumns
          initialColumnsData={[...dynamicHeaderRow, stickyHeaderRow]}
          onCloseHandler={() => setOpenModalId('')}
        />
      )}
      {/* modals end */}
    </Container>
  );
};

export default DataGrid;
