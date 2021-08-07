
import React, { Component } from 'react';

// import Home from './pages/Home'
import Editor from './pages/Editor';

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
        <Editor/>
        {/* <Home/> */}
      </div>
     );
  }
}

export default App;


