import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/home'
import DataDisplay from './pages/dataDisplay'
import Project from './pages/project/project'
import Features from './pages/features/features'

class App extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={ Project }/>
        <Route exact path="/features" component={ Features }/>
        <Route exact path="/home" component={ Home }/>
        <Route exact path="/displayData" component={ DataDisplay }/>
      </Switch>
    );
  }
}

export default App;
