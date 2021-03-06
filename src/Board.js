import React, { Component, PropTypes } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Square from "./Square";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";
import { canMoveKnight, moveKnight } from "./Game";

class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
        key={i}
        style={{ width: "12.5%", height: "12.5%" }}
        onClick={() => this.handleSquareClick(x, y)}
      >
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y == knightY) {
      return <Knight />;
    }
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }
}

// because of this http://babeljs.io/docs/plugins/transform-decorators/
export default DragDropContext(HTML5Backend)(Board);

// import React, { Component } from "react";
// import { DragDropContext } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
// import PropTypes from "prop-types";
// import Square from "./Square";
// import Knight from "./Knight";
// import { moveKnight, canMoveKnight } from "./Game";

// class Board extends Component {
//   // renderSquare(i) {
//   //   const x = i % 8;
//   //   const y = Math.floor(i / 8);
//   //   const black = (x + y) % 2 === 1;

//   //   const [knightX, knightY] = this.props.knightPosition;
//   //   const piece = x === knightX && y === knightY ? <Knight /> : null;

//   //   return (
//   //     <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
//   //       <Square black={black}>{piece}</Square>
//   //     </div>
//   //   );
//   // }
//   renderSquare(i) {
//     const x = i % 8;
//     const y = Math.floor(i / 8);
//     const black = (x + y) % 2 === 1;

//     const [knightX, knightY] = this.props.knightPosition;
//     const piece = x === knightX && y === knightY ? <Knight /> : null;

//     return (
//       <div
//         key={i}
//         style={{ width: "12.5%", height: "12.5%" }}
//         onClick={() => this.handleSquareClick(x, y)}
//       >
//         <Square black={black}>{piece}</Square>
//       </div>
//     );
//   }

//   handleSquareClick(toX, toY) {
//     moveKnight(toX, toY);
//   }

//   handleSquareClick(toX, toY) {
//     if (canMoveKnight(toX, toY)) {
//       moveKnight(toX, toY);
//     }
//   }
//   render() {
//     const squares = [];
//     for (let i = 0; i < 64; i++) {
//       squares.push(this.renderSquare(i));
//     }

//     return (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexWrap: "wrap"
//         }}
//       >
//         {squares}
//       </div>
//     );
//   }
// }

// Board.propTypes = {
//   knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
// };

// export default DragDropContext(HTML5Backend)(Board);
