import React, { Component } from "react";
import Field from "./Field"

export default class Board extends Component {


  render() {
    const { sudoku, onChange } = this.props;
    return (
      <div>
          {sudoku.solveTime &&<h2>You Solved the Sudoku!!</h2>}
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
