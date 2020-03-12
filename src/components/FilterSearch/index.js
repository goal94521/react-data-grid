import React from 'react';
import { Checkbox, List, Select, Button, Icon, Input } from 'semantic-ui-react';

import { Container } from './style';
import { dynamicHeaderRow } from '../../__mock__';

const FilterSearch = () => {
  return (
    <Container>
      <Icon name="close" size="big" className="close-icon" />
      <span className="heading">Filter Search</span>
      <Select style={{ width: '100%' }} placeholder="Type" options={[]} />

      <div>Range picker</div>

      {/* date range */}
      <div className="flex-row">
        <span className="custom-text">Custom Date Range</span>
        <Input className="custom-input" placeholder="Start Date" />
        <Input className="custom-input" placeholder="End Date" />
      </div>

      {/* Custom Filter */}
      <span>Custom Filter</span>

      <div className="flex-row">
        <Select className="custom-select" options={[]} />
        <Select className="custom-select" options={[]} />
        <Input className="custom-input" placeholder="Value" />
        <Icon name="close" size="large" />
      </div>

      <div className="flex-row">
        <Select className="custom-select" options={[]} />
        <Select className="custom-select" options={[]} />
        <Input className="custom-input" placeholder="Value" />
        <Icon name="close" size="large" />
      </div>

      <div className="flex-row">
        <Select className="custom-select" options={[]} />
        <Select className="custom-select" options={[]} />
        <Input className="custom-input" placeholder="Value" />
        <Icon name="plus circle" size="large" />
      </div>

      {/* Buttons row */}

      <div className="flex-row">
        <Button className="start-over">Start Over</Button>
        <Button className="blue-button">Save Filter</Button>
        <Button className="green-button">Filter</Button>
      </div>
    </Container>
  );
};

export default FilterSearch;
