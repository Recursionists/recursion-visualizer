import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick(e) {
    
    console.log('CLICKED', e.target.id);
    if (e.target.id === 'execute') {
      if (this.props.inputs.functionText.length && this.props.inputs.argsText.length) {
        this.execute();
      } else {
        console.log('Empty function or args');
      }
    }
    if (e.target.id === 'clearText'){
      this.props.changeState({ inputs: { functionText: '', argsText: '', indexText: '' }});
    }
  }
  
  execute() {
    let tree;
    
    // evaluate input text and call trace function
    const { functionText } = this.props.inputs;
    let fnName = grabName(functionText);
    const replacedText = functionText.replaceAll(fnName, 'ourfunc').replace('ourfunc', fnName);
    
    let evilFunc;
    const evalThis = 'evilFunc = ' + replacedText;
    eval(evalThis);
    const ourfunc = trace(evilFunc);
    
    const { argsText } = this.props.inputs;
    const evilArgs = eval(argsText);
    let functionResult;
    if (Array.isArray(evilArgs)) {
      functionResult = ourfunc(...evilArgs);
    } else {
      functionResult = ourfunc(evilArgs);      
    }
    
    console.log('Head:', tree)
    const { indexText } = this.props.inputs;
    let indices = eval(indexText);
    if (indices === undefined) indices = [];
    if (!Array.isArray(indices)) indices = [indices];
    this.props.changeState({tree: pruneArgs(tree, indices), functionResult, reinitializeNeeded: true });
    
    
    // adds trace functionality and builds tree
    function Node (args, count, level) {
      this.name = args.length > 1 ? JSON.parse(JSON.stringify(args)) : args[0];
      this.count = count;
      this.level = level;
      this.children = [];
    }
    
    function trace(func) {
      if (typeof func !== 'function') return;
      
      let count = 0;
      let level = 0;
      let parents = [];
      
      return newFunc;  
      
      // shell/wrapper for original recursive function
      // to add trace functionality
      function newFunc(...args) {
        const curr = new Node(args, count, level);
        
        if (!level) tree = curr;
        
        if (parents.length) {
          parents[parents.length - 1].children.push(curr);
        }
        count++;
        level++;
        
        parents.push(curr);
        const res = func(...args);
        parents.pop();
        
        level--;
        
        return res;
      }
    }
    
    
    // helper functions
    function grabName(text) {
      let str = '';
      let hitSpace = false;
      
      for (let i = 0; i < functionText.length; i++) {
        const curr = functionText[i];
        if (hitSpace && str.length && (curr === ' ' || curr === '(')) {
          break;
        }
        if (hitSpace && curr !== ' ' && curr !== '(') {
          str += curr;
          continue;
        }
        if (curr === ' ') {
          hitSpace = true;
        }
      }
      return str;   
    }
    
    // removes non-displayed indices from each node's arguments
    // and stringifies args for d3 tree display
    function pruneArgs(t, i) {
      function clone(items) {
        if (!items || typeof items !== 'object') return items;
        const isArray = Array.isArray(items);
        const output = isArray ? [] : {};
        Object.keys(items).forEach(key => {
          let val = items[key];
          if (key === 'name') {
            if (Array.isArray(val) && i.length) val = i.map(el => val[el]);
            val = JSON.stringify(val);
          }
          output[key] = clone(val);
        })
        return output;
      }
      return clone(t);
    }
  }
  
  render() {
    
    return (
      <div className="topEditor">
      <label className='editor'>Enter function here:<br/></label>
      
      <textarea className="functionEditor" id="functionText" value={ this.props.inputs.functionText } onChange={(e) => {
        this.props.changeState({ inputs: {...this.props.inputs, functionText: e.target.value }});
      }} rows="8" cols="100">
      </textarea>
      <br/>
      <br/>
      <label className='editor'>Enter arguments here (single value or array of values):<br/></label>
      
      <textarea className="argsEditor" id="argsText" value={ this.props.inputs.argsText } onChange={(e) => {
        this.props.changeState({ inputs: {...this.props.inputs, argsText: e.target.value }});
      }} rows="1" cols="50">
      </textarea>
      <br/>
      
      <br/>
      <label className='editor'>Enter index or indices of arguments to display (single value or array of values) * Optional *:<br/></label>
      
      <textarea className="indexEditor" id="indexText" value={ this.props.inputs.indexText } onChange={(e) => {
        this.props.changeState({ inputs: {...this.props.inputs, indexText: e.target.value }});
      }} rows="1" cols="20">
      </textarea>
      <br/>
      
      <button type="submit" id="execute" onClick={(e) => {this.handleClick(e)}}>Execute</button>
      <button type="clear" id="clearText" onClick={(e) => {this.handleClick(e)}}>Clear</button>
      <br/>
      <br/>
      <br/>
      
      </div> 
      );
    }
  }
  
  export default Input;
  
  // sample recursive functions
  
  // function fib(n) {
  //       if (n < 2) return n;
  //       return fib(n - 1) + fib(n - 2);
  //     }
  
  
  // function generateParentheses(maxToOpen, openNow = 0, current = '', results) {
  //       if (!maxToOpen && !openNow) return [current];
  //       const perms = [];
  //       if (maxToOpen) {
  //         perms.push(...generateParentheses(maxToOpen - 1, openNow + 1, `${current}(`, perms));
  //       }
  //       if (openNow) {
  //         perms.push(...generateParentheses(maxToOpen, openNow - 1, `${current})`, perms));
  //       }
  //       return perms;
  //     }