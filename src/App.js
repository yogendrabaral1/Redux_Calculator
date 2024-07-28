import React from 'react';
import './App.css';
import Buttons from './Components/buttons';
import Display from './Components/display';

function App() {
  return (
    <div className="App">
      <br />
      <Display />
      <hr style={{ width: 440 }} />
      <Buttons />
    </div>
  );
}

export default App;
