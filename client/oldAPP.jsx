import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import * as d3 from 'd3';
import Tree from 'react-d3-tree';

import './stylesheets/styles.css';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {}
  
  componentDidUpdate() {}
  
  render() {
    
    
    return (
      <Router>
      <div>
      <ul>
      <li>
      <Link to="/">Github Oauth</Link>
      </li>
      <li>
      <Link to="/about">Login Without Github</Link>
      </li>
      <li>
      <Link to="/dashboard">Sign Up</Link>
      </li>
      </ul>
      
      <hr />
      
      {/* <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>
      <Route path="/dashboard">
      <Dashboard />
      </Route>
      </Switch> */}
      </div>
      </Router>
      );
    }
    
  }
  
  export default App;
  