import React, { useEffect, useState, useRef } from 'react';
import { Input, Button, Icon, Transition } from 'semantic-ui-react';
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
  const [sortedColumns, setSortedColumns] = useState([]);
  const [sortDirection, setSortDirection] = useState('asc');

  const indexOfLastRow = paginationState.currentPage * paginationState.limit;
  const indexOfFirstRow = indexOfLastRow - paginationState.limit;

  const [currentDynamicRows, setCurrentDynamicRows] = useState(
    dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
  );
  const [currentStickyRows, setCurrentStickyRows] = useState(
    dynamicTableData.slice(indexOfFirstRow, indexOfLastRow)
  );

  const containerRef = useRef(null);

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

  // sort for specific column
  // const handleSort = clickedColumn => {
  //   let newSortOrder;
  //
  //   const alreadySortedColumn = sortedColumns.find(
  //     column => column.columnId === clickedColumn
  //   );
  //
  //   if (alreadySortedColumn) {
  //     if (alreadySortedColumn.sortOrder === 'asc') {
  //       newSortOrder = 'desc';
  //     } else if (alreadySortedColumn.sortOrder === 'desc') {
  //       newSortOrder = 'asc';
  //     }
  //
  //     setSortedColumns(prevState =>
  //       prevState.map(existingColumn => {
  //         if (existingColumn.columnId === clickedColumn) {
  //           return {
  //             ...existingColumn,
  //             sortOrder: newSortOrder
  //           };
  //         } else {
  //           return existingColumn;
  //         }
  //       })
  //     );
  //   } else if (!alreadySortedColumn) {
  //     newSortOrder = 'asc';
  //
  //     // add column to sorted columns
  //     setSortedColumns(prevState => [
  //       ...prevState,
  //       { columnId: clickedColumn, sortOrder: newSortOrder }
  //     ]);
  //   }
  //
  //   const combinedTableData = currentDynamicRows.map((dynamicItem, index) => ({
  //     ...currentStickyRows[index],
  //     ...dynamicItem
  //   }));
  //
  //   const combinedColumnValues = combinedTableData.map(
  //     item => item[clickedColumn]
  //   );
  //
  //   const sortedColumnValues = _.orderBy(
  //     combinedColumnValues,
  //     ['value'],
  //     [newSortOrder]
  //   );
  //
  //   // const sortedCombinedData = _.sortBy(combinedTableData, [clickedColumn]);
  //   const sortedCombinedData = combinedTableData.map((tableRow, rowIndex) => ({
  //     ...tableRow,
  //     [clickedColumn]: sortedColumnValues[rowIndex]
  //   }));
  //
  //   const sortedStickyData = sortedCombinedData.map(item => ({
  //     loadId: { ...item.loadId }
  //   }));
  //
  //   const sortedDynamicData = sortedCombinedData.map(item => ({
  //     status: { ...item.status },
  //     customer: { ...item.customer },
  //     pickRange: { ...item.pickRange },
  //     shipper: { ...item.shipper },
  //     deliveryRange: { ...item.deliveryRange },
  //     consignee: { ...item.consignee },
  //     stops: { ...item.stops },
  //     weight: { ...item.weight },
  //     equip: { ...item.equip },
  //     mileage: { ...item.mileage },
  //     customerRate: { ...item.customerRate },
  //     targetPt: { ...item.targetPt },
  //     am: { ...item.am }
  //   }));
  //
  //   setCurrentDynamicRows(
  //     sortedDynamicData.slice(indexOfFirstRow, indexOfLastRow)
  //   );
  //   setCurrentStickyRows(
  //     sortedStickyData.slice(indexOfFirstRow, indexOfLastRow)
  //   );
  // };

  // sort for entire row
  const handleSort = clickedColumn => {
    let newSortOrder;

    const alreadySortedColumn = sortedColumns.find(
      column => column.columnId === clickedColumn
    );

    if (alreadySortedColumn) {
      if (alreadySortedColumn.sortOrder === 'asc') {
        newSortOrder = 'desc';
      } else if (alreadySortedColumn.sortOrder === 'desc') {
        newSortOrder = 'asc';
      }

      setSortedColumns(prevState =>
        prevState.map(existingColumn => {
          if (existingColumn.columnId === clickedColumn) {
            return {
              ...existingColumn,
              sortOrder: newSortOrder
            };
          } else {
            return existingColumn;
          }
        })
      );
    } else if (!alreadySortedColumn) {
      newSortOrder = 'asc';

      // add column to sorted columns
      setSortedColumns(prevState => [
        ...prevState,
        { columnId: clickedColumn, sortOrder: newSortOrder }
      ]);
    }

    const combinedTableData = currentDynamicRows.map((dynamicItem, index) => ({
      ...currentStickyRows[index],
      ...dynamicItem
    }));

    const sortedCombinedData = _.orderBy(
      combinedTableData,
      [`${clickedColumn}.value`],
      [newSortOrder]
    );

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

    setCurrentDynamicRows(
      sortedDynamicData.slice(indexOfFirstRow, indexOfLastRow)
    );
    setCurrentStickyRows(
      sortedStickyData.slice(indexOfFirstRow, indexOfLastRow)
    );
  };

  return (
    <Container ref={containerRef}>
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
          onClick={() => {
            setShowFilters(prevState => !prevState);
          }}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
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
          <div style={{ marginTop: 4 }} onClick={() => moveBack()}>
            <LeftProgress />
          </div>
          <div
            style={{ marginTop: 4 }}
            className="right-arrow"
            onClick={() => moveForward()}
          >
            <RightProgress />
          </div>
          <div
            className="settings-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Settings />
          </div>
          <Transition
            visible={showDropdown}
            animation="slide down"
            duration={400}
          >
            <div className="settings-dropdown">
              {settingsDropdownItems.map(dropdownItem => (
                <div
                  className="settings-dropdown-item"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {dropdownItem.title}
                </div>
              ))}
            </div>
          </Transition>
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
      <CustomizeColumns
        containerRef={containerRef}
        visible={showFilters}
        initialColumnsData={[...dynamicHeaderRow, stickyHeaderRow]}
        onCloseHandler={() => {
          setShowFilters(prevState => !prevState);
        }}
        wideMode
      />
      {/* modals end */}
    </Container>
  );
};

export default DataGrid;
