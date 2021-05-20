import React from 'react';
import './App.css';
import CounterHook from './CounterHook';
// import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Counter App in ReactJS</h1>
      </header>
      <CounterHook initValue={0}/>
      <CounterHook initValue={108}/>

    </div>
  );
}

export default App;
