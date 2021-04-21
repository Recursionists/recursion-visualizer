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
      <Tree orientation='vertical' data={ tree } />
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