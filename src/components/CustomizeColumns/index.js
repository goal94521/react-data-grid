import React, { useState, useEffect } from 'react';
import { Select, Button, Icon } from 'semantic-ui-react';

import { Container } from './style';
import { chunkArray } from '../../utils/arrays';
import { mergeClassNames } from '../../utils/styles';
import { CloseWindow, DownArrow, GrabHandle, SmallDelete } from '../Icon';

const CustomizeColumns = ({
  wideMode,
  initialColumnsData,
  onCloseHandler,
  onCancelHandler,
  onApplyHandler
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (wideMode) {
      setList(chunkArray(initialColumnsData, 10));
    } else if (!wideMode) {
      setList(initialColumnsData);
    }
  }, [wideMode, initialColumnsData]);

  const selectClassName = mergeClassNames(
    'custom-select',
    wideMode && 'wide-mode'
  );

  return (
    <Container>
      <div className="close-icon" onClick={onCloseHandler}>
        <CloseWindow />
      </div>
      <span className="heading">{`Customize Columns (${initialColumnsData.length})`}</span>
      {/* wide mode start */}
      {wideMode && list && (
        <div className="lists-container">
          {list &&
            list.map(listItems => (
              <div className="list">
                {listItems.map(row => (
                  <div className="list-item">
                      <GrabHandle />
                      <span className="item-text">{row.value}</span>
                      <div className="delete-icon">
                          <SmallDelete />
                      </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
      {/* wide mode end*/}

      {/* default mode start */}
      {!wideMode && list && (
        <div className="list single-list">
          {list.map(row => (
            <div className="list-item">
              <GrabHandle />
              <span className="item-text">{row.value}</span>
              <div className="delete-icon">
                <SmallDelete />
              </div>
            </div>
          ))}
        </div>
      )}
      {/* default mode end */}
      <Select
        className={selectClassName}
        placeholder="Add New Column"
        options={[]}
        icon={
          <div className="down-arrow">
            <DownArrow />
          </div>
        }
      />
      <div className="row-buttons">
        <Button className="cancel-button" onClick={onCancelHandler}>
          Cancel
        </Button>
        <Button className="success-button" onClick={onApplyHandler}>
          Apply
        </Button>
      </div>
    </Container>
  );
};

export default CustomizeColumns;
