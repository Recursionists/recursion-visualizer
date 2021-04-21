import React, { Component } from 'react';

class Visualizer extends Component {
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
const { functionText } = this.props;
console.log('functionText:', functionText);







}


  render() {
    
    console.log(2222, this.props.functionText)
    return (
      <div>
      <label>Enter function here:</label>
      
      <textarea className='functionEditor' id="functionText" value={ this.props.functionText } onChange={(e) => {
        this.props.changeState({ functionText: e.target.value });
      }} rows="8" cols="100">
      </textarea>
      <button type="submit" id='execute' onClick={(e) => {this.handleClick(e)}}>Execute</button>
      <button type="clear" id='clearText' onClick={(e) => {this.handleClick(e)}}>Clear</button>
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
  