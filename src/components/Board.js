import React, { Component } from "react";
import Field from "./Field"

export default class Board extends Component {
  render() {
    const { sudoku } = this.props;
    return (
      <div>
        {sudoku.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((field) => (
              <Field field={field} key={field.col} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
