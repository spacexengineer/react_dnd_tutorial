// import React from 'react';
// import ReactDOM from 'react-dom';
// import Board from './Board';
// import { observe } from './Game';

// const rootEl = document.getElementById('root');

// observe(knightPosition =>
//   ReactDOM.render(
//     <Board knightPosition={knightPosition} />,
//     rootEl
//   )
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import Board from "./Board";

// ReactDOM.render(
//   <Board knightPosition={[7, 4]} />,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { observe } from "./Game";

const rootEl = document.getElementById("root");

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, rootEl)
);
