import { color } from 'd3-color';
import React, { Component } from 'react';
import Tree from 'react-d3-tree';




class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
const { tree } = this.props

    return (

      <div className="treeWrapper" style={{height: '700px'}}>
      <Tree orientation='vertical' 
            initialDepth={3}
            translate={{x:200, y:200}}
            depthFactor={ 0 }
            collapsible={ true } 
            enableLegacyTransition={ true } 
            transitionDuration={ 8000 } 
            data={ tree } />
      </div>
    
      );
    }
  }
  
  export default Visualizer;




// const orgChart = {
//   name: 'CEO',
//   children: [
//     {
//       name: 'Manager',
//       attributes: {
//         department: 'Production',
//       },
//       children: [
//         {
//           name: 'Foreman',
//           attributes: {
//             department: 'Fabrication',
//           },
//           children: [
//             {
//               name: 'Worker',
//             },
//           ],
//         },
//         {
//           name: 'Foreman',
//           attributes: {
//             department: 'Assembly',
//           },
//           children: [
//             {
//               name: 'Worker',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };