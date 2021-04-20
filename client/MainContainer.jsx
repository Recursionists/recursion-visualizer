import React, { Component } from 'react';
import Visualizer from './Visualizer.jsx';
import Input from './Input.jsx';
import SavedFunctions from './SavedFunctions.jsx'; 

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    
    return (
      <div>
      RENDER VISUALIZER ETC.
      <Visualizer />
      <Input functionText={ this.props.functionText } changeState={ this.props.changeState } />
      <SavedFunctions />
      </div> 
      );
    }
  }
  
  export default MainContainer;
  
  
  