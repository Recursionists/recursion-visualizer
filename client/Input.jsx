import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick(e) {
    
    console.log('CLICKED', e.target.id);
    if (e.target.id === 'execute') {
      this.execute();
    }
    if (e.target.id === 'clearText'){
      this.props.changeState({ functionText: ''});
    }
  }
  
  execute() {
    let head;
    
    function Node (args, count, level) {
      // enter truthy for "time machine mode":
      // (the future changes the past)
      // args will be reference, so will be updated
      // if mutated as function executes
      // this.value = 1 ? args : JSON.parse(JSON.stringify(args));
      this.name = args;
      this.count = count;
      this.level = level;
      this.children = [];
    }
    
    function trace(funcObj) {
      if (typeof funcObj !== 'object') return;
      
      let count = 0;
      let level = 0;
      let parents = [];  
      
console.log('funcObj:', funcObj)
      const [funcName, func] = Object.entries(funcObj)[0];

// // eval funcStr
//       const evalThis = 'const func = ' + funcStr;
// eval(evalThis);
// console.log('func:', func);


      if (typeof func !== 'function') return;
console.log('fib:', fib)

      const res = funcName + ' = ' + newFunc.toString();
      eval(res);
console.log('fib after eval:', fib)
      // newFunc = newFunc.bind(this);
      return newFunc;  
      
      // trace functionality
      function newFunc(...args) {
        const curr = new Node(args, count, level);
        
        if (!level) head = curr;
        
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
    
    const { functionText } = this.props;

      console.log('functionText:', functionText);
      let evilFunc;
      const evalThis = 'evilFunc = ' + functionText;

      console.log('evalThis:', evalThis)
      'let funcName'
      eval(evalThis);
let fib;
      // const evilFunc = function fib(n) {
      //   if (n < 2) return n;
      //   return fib(n - 1) + fib(n - 2);
      // };
      
      // console.log('evilFunc:', evilFunc)
      
      // // algo to grab function name from text;
      const funcName = 'fib'    

      const passFunc = {};
      passFunc[funcName] = evilFunc;
      
      // console.log('passFunc:', passFunc);
      
      const traced = trace(passFunc);
      
      console.log('traced:', traced)
      const initialArgs = [5];
      
      // console.log('Result: ', traced(...initialArgs));
      
      console.log('Head:', head)
    
  }
  
  
  
  
  render() {
    
    console.log(2222, this.props.functionText)
    return (
      <div>
      <label>Enter function here:<br/></label>
      
      <textarea className='functionEditor' id="functionText" value={ this.props.functionText } onChange={(e) => {
        this.props.changeState({ functionText: e.target.value });
      }} rows="8" cols="100">
      </textarea>
      <br/>
      <button type="submit" id='execute' onClick={(e) => {this.handleClick(e)}}>Execute</button>
      <button type="clear" id='clearText' onClick={(e) => {this.handleClick(e)}}>Clear</button>
      <br/>
      <br/>
      <br/>
      
      </div> 
      );
    }
  }
  
  export default Input;
  
  // <textarea
  //            className='html-editor'  
  //            ref='myTextarea' 
  //           value = {this.state.textareaVal}
  //           onChange={(event)=>{
  //                       this.setState({
  //                          textareaVal:event.target.value;
  //                       });
  //                    }}
  //        >
  //       </textarea>` 
  
  // <textarea className='functionEditor' id="functionText" name="functionText" rows="4" cols="100">
  
  
  // function fib(n) {
  //       if (n < 2) return n;
  //       return fib(n - 1) + fib(n - 2);
  //     }