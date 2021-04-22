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
      <Visualizer tree={ this.props.tree } reinit={ this.props.reinit } functionResult={ this.props.functionResult } changeState={ this.props.changeState }/>
      <Input inputs={ this.props.inputs } changeState={ this.props.changeState } />
      <SavedFunctions />
      </div> 
      );
    }
  }
  
  export default MainContainer;
  
  
  