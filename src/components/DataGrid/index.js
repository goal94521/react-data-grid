import React from 'react';
import { Input, Button } from 'semantic-ui-react';

import CustomTable from '../Table';
import { Container, Header, PaginationContainer } from './style';
import { Filter, LeftProgress, RightProgress, Settings } from '../Icon';

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
        <PaginationContainer>
          <span className="secondary-text">3-3 of 105 Results</span>
          <LeftProgress />
          <div style={{ width: 10 }} />
          <RightProgress />
          <div style={{ width: 20 }} />
          <Settings />
        </PaginationContainer>
      </Header>
      <CustomTable />
    </Container>
  );
};

export default DataGrid;
