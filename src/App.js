import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DomoOutput';
import SortedList from './components/SortedList/SortedList';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App component re-evaluated!');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <React.Fragment>
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
    <SortedList />
    </React.Fragment>
  );
}

export default App;
