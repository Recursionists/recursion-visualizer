import React, { Component } from 'react';

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  

  handleClick(e){
    console.log('hit saved button')

  }
  render() {
    
    
    return (
      <div>
      <button type="save" id='save' onClick={(e) => {this.handleClick(e)}}>Save Function</button>
      </div> 
      );
    }
  }
  
  export default Visualizer;
  