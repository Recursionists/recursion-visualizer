import React, { Component } from 'react';

class Oauth extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    
    return (
      <div>
        <a href ="https://github.com/login/oauth/authorize?client_id=090533ad573e6595ce3c&redirect_uri=http://localhost:8080/">
      OAUTH
      </a>
      </div>      
      );
    }
  }

export default Oauth;

