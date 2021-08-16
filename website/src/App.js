
import React, { Component } from 'react';

import {Switch,Route,HashRouter}  from 'react-router-dom'
// Router
import Home from './pages/Home'
import Editor from './pages/Editor';
import Draft from './pages/Draft'
import Article from './pages/Article'


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
          <Route exact component={Draft}  path="/editor/drafts/" />
          <Route exact component={Article}  path="/post/:id"  />
          <Route exact component={Editor}  path="/draft/:id"  />
          <Route exact component={Editor}  path="/editor/drafts/new" />
        </Switch>
      </HashRouter>
     );
  }
}

export default App;


