import React from 'react';
import './App.css';
// import TestComponent from './TestComponent'
// import ClassComponent from './pages/ClassComponent'
import FunctionComponent from './pages/FunctionComponent'
import SetStatePage from './pages/SetStatePage'
import LifeCyclePage from './pages/LifeCyclePage'
import ReduxPage from './pages/ReduxPage'

function App() {
  return (
    <div className="App">
      <h1 className="app-header">React Learn</h1>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      <FunctionComponent />
      <SetStatePage />
      <LifeCyclePage />
      <ReduxPage />
    </div >
  );
}

export default App;
