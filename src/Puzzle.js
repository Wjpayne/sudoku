import React, { Component } from "react";
import "./css/puzzle.css";
import generator from "sudoku";
import Board from "./components/Board"


/* generate a sudoku with the structure of

{rows: [{index:0, cols: [{row: 0, col:0, value:1, readonly:true},...]},...]}
*/

function generateSudoku() {
  const raw = generator.makepuzzle();
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

export default class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sudoku: generateSudoku(),
    };
  }
  render() {
    return (
      <div className = "container">
        <header>
          <h1>Sudoku</h1>
        </header>
        <div className="board-container">
        <Board sudoku ={this.state.sudoku} />
        </div>
      </div>
    );
  }
}
