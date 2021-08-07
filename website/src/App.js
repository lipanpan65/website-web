
import React, { Component } from 'react';

import {Switch,Route,HashRouter}  from 'react-router-dom'
// Router
import Home from './pages/Home'
import Editor from './pages/Editor';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <HashRouter>
        <Switch>
          <Route exact component={Home}  path="/" />
          <Route exact component={Editor}  path="/edit" />
        </Switch>
      </HashRouter>
     );
  }
}

export default App;


