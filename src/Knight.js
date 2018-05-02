// import React, { Component, PropTypes } from 'react';
// import { ItemTypes } from './Constants';
// import { DragSource } from 'react-dnd';

// const knightSource = {
//   beginDrag(props) {
//     return {};
//   }
// };

// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     connectDragPreview: connect.dragPreview(),
//     isDragging: monitor.isDragging(),
//   }
// }

// export class Knight extends Component {
//   componentDidMount() {
//     const img = new Image();
//     img.src = 'blank';
//     img.onload = () => this.props.connectDragPreview(img);
//   }
//   render() {
//     const { connectDragSource, isDragging} = this.props;
//     return connectDragSource(
//       <div style={{
//         opacity: isDragging ? 0.5 : 1,
//         fontSize: 35,
//         fontWeight: 'bold',
//         cursor: 'move',
//       }}>
//         ♘
//       </div>
//     );
//   }
// }

// Knight.propTypes = {
//   connectDragSource: PropTypes.func.isRequired,
//   isDragging: PropTypes.bool.isRequired,
// }

// export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);

import React, { Component } from "react";

export default class Knight extends Component {
  render() {
    return <span>♘</span>;
  }
}
