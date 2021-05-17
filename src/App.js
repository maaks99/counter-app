import React from 'react';
import './App.css';
import Hooks from './Hooks';
// import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Counter App in ReactJS</h1>
      </header>
      <Hooks initValue={0}/>
      <Hooks initValue={108}/>

    </div>
  );
}

export default App;
