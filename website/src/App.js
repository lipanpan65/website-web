
import React, { Component } from 'react';

import {Switch,Route,HashRouter}  from 'react-router-dom'
// Router
import Home from './pages/Home'
import Admin from './pages/Admin'
import Editor from './pages/Editor';
import Draft from './pages/Draft'
import Article from './pages/Article'

import PrivateRouter from './components/PrivateRouter';


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
          <PrivateRouter exact component={Admin}  path="/operation" />
          <Route exact component={Draft}  path="/editor/drafts/" />
          <Route exact component={Article}  path="/post/:id"  />
          <Route exact component={Editor}  path="/editor/drafts/:id"  />
          <Route exact component={Editor}  path="/editor/drafts/new" />
        </Switch>
      </HashRouter>
     );
  }
}

export default App;


