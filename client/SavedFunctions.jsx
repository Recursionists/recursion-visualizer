import React, { Component } from 'react';

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  

  handleClick(e){
    const { functionText } = this.props.inputs;
    console.log('trigger saved btn and heres functext: ', functionText);
    
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
  