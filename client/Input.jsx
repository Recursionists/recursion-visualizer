import React, { Component } from 'react';

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick(e) {
    
    console.log('CLICKED EXECUTE', e.target.id);
    
  }

  handleClear(e){
    
  }
  
  render() {
    
    console.log(2222, this.props.functionText)
    return (
      <div>
      <label>Enter function here:</label>
      
      <textarea className='functionEditor' id="functionText" onChange={(e) => {
        this.props.changeState({ functionText: e.target.value });
      }} rows="8" cols="100">
      </textarea>
      <button type="submit" id='execute' onClick={(e) => {this.handleClick(e)}}>Execute</button>
      <button type="clear" id='clearText' onClick={(e) => {this.handleClear(e)}}>Execute</button>
      
      //run and clear buttons
      </div> 
      );
    }
  }
  
  export default Visualizer;
  
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
  