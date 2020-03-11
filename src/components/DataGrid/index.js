import React from 'react';
import { Input, Button } from 'semantic-ui-react';

import CustomTable from '../Table';
import { Container, Header } from './style';
import { Filter } from '../Icon';

const DataGrid = () => {
  return (
    <Container>
      <Header>
        <span className="secondary-text">3 Customer Ratings</span>
        <Input
          icon="search"
          placeholder="Search..."
          className="custom-search-input"
        />
        <Button icon className="show-filters-button">
          Show Filters
          <Filter />
        </Button>
      </Header>
      <CustomTable />
    </Container>
  );
};

export default DataGrid;
