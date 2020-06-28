import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import HomePage from './router/HomePage';
import UserPage from './router/UserPage';
import ErrorPage from './router/ErrorPage';
// import TestComponent from './TestComponent'
// import ClassComponent from './pages/ClassComponent'
// import FunctionComponent from './pages/FunctionComponent'
// import SetStatePage from './pages/SetStatePage'
// import LifeCyclePage from './pages/LifeCyclePage'
// import ReduxPage from './pages/ReduxPage'
// import ReactReduxPage from './pages/ReactReduxPage'

function App() {
  return (
    <div className="App">
      <h1 className="app-header">React Learn</h1>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <SetStatePage /> */}
      {/* <LifeCyclePage /> */}
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}

      <Router>
        <Link to="/home">首页</Link>
        <Link to="/user">用户中心</Link>
        <Switch>
          {/* route 有三种写法 children > component > render。不能同时出现*/}
          <Route exact path="/" render={() => 
            <Redirect to="/home"></Redirect>
          }>
          </Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/user" component={UserPage}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
        
      </Router>
    </div >
  );
}

export default App;
