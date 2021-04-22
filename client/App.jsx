import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Oauth from './Oauth.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import MainContainer from './MainContainer.jsx';

// import * as d3 from 'd3';
// import Tree from 'react-d3-tree';

import './stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      functionText: '',
      tree: {},
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(obj) {
    this.setState(obj);
  }

  componentDidMount() {}

  render() {
    console.log(this.state);

    return (
      <Router>
        <div>
          {this.state.loggedIn ? (
            <div>
              <Redirect to='/visualizer' />
              <Route exact path='/visualizer'>
                <MainContainer
                  functionText={this.state.functionText}
                  changeState={this.changeState}
                  tree={this.state.tree}
                />
              </Route>
            </div>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Link to='/oauth'>
                  Github Oauth
                  <br />
                </Link>
                <Link to='/login'>
                  Login Without Github
                  <br />
                </Link>
                <Link to='/signup'>
                  Sign Up
                  <br />
                </Link>
              </Route>

              <Route exact path='/oauth'>
                <Oauth />
              </Route>

              <Route exact path='/login'>
                <Login changeState={this.changeState} />
              </Route>

              <Route exact path='/signup'>
                <Signup loggedin={this.state.loggedIn} />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
