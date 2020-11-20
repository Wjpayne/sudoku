import React, { Component } from "react";
import "./css/puzzle.css";

import Board from "./components/Board";
import produce from "immer";
import { generateSudoku, checkSolution } from "./lib/sudoku";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = produce({}, () => ({
      sudoku: generateSudoku(),
    }));
  }

  handleChange = (e) => {
    this.setState(
      produce((state) => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        if (!state.sudoku.solvedTime) {
          const solved = checkSolution(state.sudoku);
          if (solved) {
            state.sudoku.solveTime = new Date();
          }
        }
      })
    );
  };

  solveSudoku = (e) => {
    this.setState(
      produce((state) => {
        state.sudoku.rows.forEach((row) =>
          row.cols.forEach((col) => {
            {
              col.value = state.sudoku.solution[col.row * 9 + col.col];
            }
          })
        );
      })
    );
  };
  render() {
    return (
      <div className="container">
        <header>
          <h1>Sudoku</h1>
        </header>
        <div className="board-container">
          <Board sudoku={this.state.sudoku} onChange={this.handleChange} />

          <button onClick={this.solveSudoku}>Solve</button>
        </div>
      </div>
    );
  }
}
