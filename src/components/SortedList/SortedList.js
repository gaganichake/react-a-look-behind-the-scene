import React, { useState, useCallback, useMemo } from 'react';

import './SortedList.css';
import DemoList from '../Demo/DemoList';
import Button from '../UI/Button/Button';

const SortedList = () => {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="list">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default SortedList;