import React from 'react';
import { Checkbox, List, Select, Button, Icon } from 'semantic-ui-react';

import { Container } from './style';
import { dynamicHeaderRow } from '../../__mock__';

const CustomizeColumns = () => {
  return (
    <Container>
      <Icon name="close" size="big" className="close-icon" />
      <span className="heading">Customize Columns</span>
      <List className="list">
        {dynamicHeaderRow.map(row => (
          <List.Item className="list-item">
            <Checkbox className="custom-checkbox" />
            <span className="item-text">{row.value}</span>
          </List.Item>
        ))}
      </List>
      <Select placeholder="Add Column" options={[]} />
      <Button className="success-button">Apply</Button>
    </Container>
  );
};

export default CustomizeColumns;
