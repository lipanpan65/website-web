
import React, { Component } from 'react';

import Home from './pages/Home'


import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        {/* App */}
        <Home/>
      </div>
     );
  }
}
 
export default App;


