import React, { useEffect, useState } from 'react';
import { Input, Button, Icon, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

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
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [paginationState, setPaginationState] = useState({
    currentPage: 1,
    limit: 15
  });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

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
      setCurrentDynamicRows(
        dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setCurrentStickyRows(
        stickyTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
    }
  }, [paginationState]);

  useEffect(() => {
    if (searchValue) {
      const combinedTableData = dynamicTableData.map((dynamicItem, index) => ({
        ...stickyTableData[index],
        ...dynamicItem
      }));

      const filteredCombinedData = combinedTableData.filter(item => {
        const itemKeys = Object.keys(item);

        let result = false;

        itemKeys.forEach(key => {
          if (
            item[key].value
              .toString()
              .toLowerCase()
              .startsWith(searchValue.toLowerCase())
          ) {
            result = true;
          }
        });

        return result;
      });

      const filteredStickyData = filteredCombinedData.map(item => ({
        loadId: { ...item.loadId }
      }));

      const filteredDynamicData = filteredCombinedData.map(item => ({
        status: { ...item.status },
        customer: { ...item.customer },
        pickRange: { ...item.pickRange },
        shipper: { ...item.shipper },
        deliveryRange: { ...item.deliveryRange },
        consignee: { ...item.consignee },
        stops: { ...item.stops },
        weight: { ...item.weight },
        equip: { ...item.equip },
        mileage: { ...item.mileage },
        customerRate: { ...item.customerRate },
        targetPt: { ...item.targetPt },
        am: { ...item.am }
      }));

      setCurrentDynamicRows(
        filteredDynamicData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setCurrentStickyRows(
        filteredStickyData.slice(indexOfFirstRow, indexOfLastRow)
      );
    } else {
      setCurrentDynamicRows(
        dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setCurrentStickyRows(
        stickyTableData.slice(indexOfFirstRow, indexOfLastRow)
      );
    }
  }, [searchValue]);

  const totalItemsCount = dynamicTableData.length;
  const numberOfItemsPerPage = 15;

  const numberOfPages = Math.floor(
    (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
  );

  const moveForward = () => {
    if (paginationState.currentPage + 1 <= numberOfPages) {
      setPaginationState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage + 1
      }));
    }
  };

  const moveBack = () => {
    if (paginationState.currentPage !== 1) {
      setPaginationState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage - 1
      }));
    }
  };

  const handleSort = clickedColumn => {

    console.log('hhhh3')

    const combinedTableData = currentDynamicRows.map((dynamicItem, index) => ({
      ...currentStickyRows[index],
      ...dynamicItem
    }));

    const sortedCombinedData = _.sortBy(combinedTableData, [clickedColumn]);

    const sortedStickyData = sortedCombinedData.map(item => ({
      loadId: { ...item.loadId }
    }));

    const sortedDynamicData = sortedCombinedData.map(item => ({
      status: { ...item.status },
      customer: { ...item.customer },
      pickRange: { ...item.pickRange },
      shipper: { ...item.shipper },
      deliveryRange: { ...item.deliveryRange },
      consignee: { ...item.consignee },
      stops: { ...item.stops },
      weight: { ...item.weight },
      equip: { ...item.equip },
      mileage: { ...item.mileage },
      customerRate: { ...item.customerRate },
      targetPt: { ...item.targetPt },
      am: { ...item.am }
    }));

    if (sortColumn !== clickedColumn) {
      setSortColumn(clickedColumn);
      setCurrentDynamicRows(
        sortedDynamicData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setCurrentStickyRows(
        sortedStickyData.slice(indexOfFirstRow, indexOfLastRow)
      );
      setSortDirection('ascending');

      return;
    }

    const stickyData = combinedTableData.map(item => ({
      loadId: { ...item.loadId }
    }));

    const dynamicData = combinedTableData.map(item => ({
      status: { ...item.status },
      customer: { ...item.customer },
      pickRange: { ...item.pickRange },
      shipper: { ...item.shipper },
      deliveryRange: { ...item.deliveryRange },
      consignee: { ...item.consignee },
      stops: { ...item.stops },
      weight: { ...item.weight },
      equip: { ...item.equip },
      mileage: { ...item.mileage },
      customerRate: { ...item.customerRate },
      targetPt: { ...item.targetPt },
      am: { ...item.am }
    }));

    setCurrentDynamicRows(
      dynamicData.reverse().slice(indexOfFirstRow, indexOfLastRow)
    );
    setCurrentStickyRows(
      stickyData.reverse().slice(indexOfFirstRow, indexOfLastRow)
    );
    setSortDirection('ascending' ? 'descending' : 'ascending');
  };

  console.log(currentDynamicRows, 'current d');

  return (
    <Container>
      <Header>
        <span className="secondary-text">{`${dynamicTableData.length} Customer Ratings`}</span>
        <Input
          icon
          placeholder="Search..."
          className="custom-search-input"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        >
          <input />
          <Icon name="search" size="large" />
        </Input>
        <Button
          icon
          className="show-filters-button"
          onClick={() => setShowFilters(true)}
        >
          Show Filters
          <Filter />
        </Button>
        <PaginationContainer>
          <span className="secondary-text">
            {`${indexOfFirstRow + 1}-${
              paginationState.currentPage === numberOfPages
                ? dynamicTableData.length
                : indexOfLastRow
            } of ${dynamicTableData.length} Results`}
          </span>
          <div onClick={() => moveBack()}>
            <LeftProgress />
          </div>
          <div className="right-arrow" onClick={() => moveForward()}>
            <RightProgress />
          </div>
          <Dropdown
            className="settings-dropdown"
            direction="left"
            onClick={() => setShowDropdown(!showDropdown)}
            icon={<Settings />}
          >
            <Dropdown.Menu className="settings-dropdown-menu">
              {settingsDropdownItems.map(dropdownItem => (
                <Dropdown.Item>{dropdownItem.title}</Dropdown.Item>
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
        handleSort={id => handleSort(id)}
      />
      {/* modals start */}
      {showFilters && (
        <CustomizeColumns
          initialColumnsData={[...dynamicHeaderRow, stickyHeaderRow]}
          onCloseHandler={() => setShowFilters(false)}
          wideMode
        />
      )}
      {/* modals end */}
    </Container>
  );
};

export default DataGrid;
