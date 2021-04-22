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

//test
// import * as d3 from 'd3';
// import Tree from 'react-d3-tree';

import './stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true, //false,
      inputs: {
        functionText: `function fib(n) {
          if (n < 2) return n;
          return fib(n - 1) + fib(n - 2);
        }`,
        argsText: '3',
        indexText: '',
      },
      tree: {},
      functionResult: null,
      reinitializeNeeded: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(obj) {
    this.setState(obj);
  }

  render() {
    console.log(this.state);

    return (
      <Router>
      <div className="links">
      { this.state.loggedIn ? <div>  
        <Redirect to="/maincontainer" />
        <Route exact path="/maincontainer">
        <MainContainer inputs={ this.state.inputs } changeState={ this.changeState } tree={ this.state.tree }
        /> 
        </Route>
        </div>
        :
        <Switch>        
        <Route exact path="/">
        <Link to="/oauth">Google / Github<br/></Link>
        <Link to="/login">Login<br/></Link>
        <Link to="/signup">Sign Up<br/></Link>
        </Route>
        
        <Route exact path="/oauth">
        <Oauth />
        </Route>
        
        <Route exact path="/login">
        <Login changeState={ this.changeState }/>
        </Route>
        
        <Route exact path="/signup">
        <Signup />
        </Route>
        
        </Switch>
      }
      </div>
      </Router>
    );
  }
}

export default App;
