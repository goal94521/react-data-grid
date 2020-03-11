import React, { useState } from 'react';
import { Input, Button, Icon, Dropdown } from 'semantic-ui-react';

import CustomTable from '../Table';
import { Container, Header, PaginationContainer } from './style';
import { Filter, LeftProgress, RightProgress, Settings } from '../Icon';

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
          <LeftProgress />
          <div style={{ width: 10 }} />
          <RightProgress />
          <div style={{ width: 20 }} />
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
      <CustomTable />
    </Container>
  );
};

export default DataGrid;
