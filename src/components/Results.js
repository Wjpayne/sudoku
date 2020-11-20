import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        const {sudoku} = this.props;
        const elapsed = Math.floor((sudoku.solveTime.getTime() - sudoku.startTime.getTime()) / 1000)
        return (
            <div>
                <h2>You solved the puzzle in {elapsed} seconds </h2>
            </div>
        )
    }
}
