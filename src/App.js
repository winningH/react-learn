import React from 'react';
import './App.css';
// import TestComponent from './TestComponent'
// import ClassComponent from './pages/ClassComponent'
import FunctionComponent from './pages/FunctionComponent'
import SetStatePage from './pages/SetStatePage'

function App() {
  return (
    <div className="App">
      <h1 className="app-header">React Learn</h1>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      <FunctionComponent />
      <SetStatePage />
    </div>
  );
}

export default App;
