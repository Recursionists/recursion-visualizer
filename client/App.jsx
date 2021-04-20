import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
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
    const data = { name: 'root', children: [] };

    // const root = d3.hierarchy(data);

    return (
      <div>
        <h1>testing</h1>
        <p>Nick Stillman</p>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=090533ad573e6595ce3c&redirect_uri=http://localhost:8080/OAuthlogin`}
        >
          <p>OAuth login test</p>
        </a>
      </div>
    );
  }
}

export default App;
