import React, { Component } from "react";
import Field from "./Field"
import Timer from "./Timer"
import Results from './Results';

export default class Board extends Component {


  render() {
    const { sudoku, onChange } = this.props;
    return (
      <div>
          {!sudoku.solveTime && <Timer start= {sudoku.startTime} />}
          {sudoku.solveTime && <Results sudoku = {sudoku} />}
        {sudoku.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((field) => (
              <Field field={field} key={field.col}  onChange = {onChange} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

  

