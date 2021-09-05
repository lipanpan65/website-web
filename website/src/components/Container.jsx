import React, { Component, Fragment } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import PrivateRouter from '../components/PrivateRouter'
import User from '../pages/roles/operation/user';
import Home from '../pages/roles/operation/home';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <Fragment>
        <Switch>
          <PrivateRouter exact component={Home} path="/operation" />
          <PrivateRouter exact component={User} path="/operation/user" />
        </Switch>
      </Fragment>
    )
  }
}

export default Container


