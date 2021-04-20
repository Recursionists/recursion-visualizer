import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    
    return (
      <div className="signup-wrapper">
        <h1>Please Sign Up</h1>
        <form>
        <label>
            <p>Choose username</p>
            <input type="text" />
        </label>
        <label>
            <p>Choose password</p>
            <input type="password" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
      </div> 
      );
    }
  }

export default Signup;


