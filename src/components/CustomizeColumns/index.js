import React, { useState, useEffect } from 'react';
import { Select, Button, TransitionablePortal } from 'semantic-ui-react';

import { Container } from './style';
import { chunkArray } from '../../utils/arrays';
import { mergeClassNames } from '../../utils/styles';
import { CloseWindow, DownArrow, GrabHandle, SmallDelete } from '../Icon';

const CustomizeColumns = ({
  wideMode,
  initialColumnsData,
  onCloseHandler,
  onCancelHandler,
  onApplyHandler,
  visible,
  containerRef
}) => {
  const [list, setList] = useState([]);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    if (visible) {
      if (wideMode) {
        setList(chunkArray(initialColumnsData, 10));
      } else if (!wideMode) {
        setList(initialColumnsData);
      }
    }
  }, [wideMode, initialColumnsData, visible]);

  useEffect(() => {
    if (visible && containerRef.current) {
      setTop(containerRef.current.offsetTop);
      setRight(containerRef.current.offsetLeft);
    }
  }, [visible]);

  const selectClassName = mergeClassNames(
    'custom-select',
    wideMode && 'wide-mode'
  );

  return (
    <TransitionablePortal
      open={visible}
      transition={{ animation: 'fly left', unmountOnHide: false, duration: 1000 }}
    >
      <Container top={top} right={right}>
        <div className="close-icon" onClick={() => onCloseHandler()}>
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
    </TransitionablePortal>
  );
};

export default CustomizeColumns;
