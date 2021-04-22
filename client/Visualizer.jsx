import React, { Component } from 'react';
import Tree from 'react-d3-tree';




class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const { tree } = this.props
    
    return (
      
      <div className="treeWrapper" style={{height: '800px'}}>
      <Tree orientation='vertical'
      translate={{x:200, y:200}}
      data={ tree } />
      </div>
      
      );
    }
  }
  
  export default Visualizer;
  
  
  {/* <Tree orientation='vertical' 
  initialDepth={3}
  translate={{x:200, y:200}}
  depthFactor={ 0 }
  collapsible={ true } 
  enableLegacyTransition={ true } 
  transitionDuration={ 8000 } 
data={ tree } /> */}