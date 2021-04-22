import { color } from 'd3-color';
import React, { Component } from 'react';
import Tree from 'react-d3-tree';




class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bright: 0,
      traversing: false,
      treeState: {}
    };
    this.size = 0;
    this.traceCount = this.traceCount.bind(this);
    this.traverse = this.traverse.bind(this);
    this.tree = {};
    this.timer = null;
  }
  
  componentDidUpdate() {    
    if (this.props.reinit) {
      clearInterval(this.timer);
      this.tree = {};
      this.props.changeState({ reinitializeNeeded: false});
      this.setState({ bright: 0, traversing: false, treeState: {} });
    }
    
    const { tree } = this.props;
    if (!Object.keys(this.tree).length && Object.keys(tree).length && !this.state.traversing) {
      this.tree = tree;
    }
    
    if (Object.keys(this.tree).length && !this.state.traversing) {
      this.traceCount(this.tree);
      
      this.setState({ traversing: true });
      
      this.timer = setInterval(this.traverse, 1000);
    }
    
  }
  
  traceCount(head) {
    let size = 0;
    (function getSize(head) {  
      size++;
      if (!head.children.length) return;
      for (const node of head.children) {
        getSize(node);
      }
    })(head);
    
    this.size = size;
  }
  
  traverse () {
    let currBright = this.state.bright;
    if (currBright >= this.size -1) currBright = -1;
    
    const tree = JSON.parse(JSON.stringify(this.tree));
    
    if (Object.keys(tree).length && this.state.traversing) {
      
      function setMarker(head, count) {  
        if (head.count === count) {
          head.attributes = {'Call#': (count + 1).toString()};
          return true
        }
        if (!head.children.length) return false;
        for (const node of head.children) {
          const res = setMarker(node, count);
          if (res) return true;
        }
        return false;
      }
      setMarker(tree, this.state.bright);
    }
    this.setState({ bright: currBright + 1, treeState: tree })
  }
  
  
  
  
  render() {
    
    const { treeState } = this.state;
    
    let treeDisplay
    if (Object.keys(treeState).length) { 
      
      const result = JSON.stringify(this.props.functionResult)
      let tail = result.length > 15 ? '...' :'';
      
      treeDisplay = (
        <span>
        <span className="resultDisplay"> Function result: { result.slice(0, 80).concat(tail) } </span>
        <Tree data={ treeState }
        orientation="vertical"
        translate={{x:800, y:200}}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        />
        </span>
        
        )
      }
      
      return (
        <div className="treeWrapper" style={{height: "900px"}}>
        { treeDisplay }
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