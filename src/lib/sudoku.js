import generator from "sudoku";

export function generateSudoku() {
  const raw = generator.makepuzzle();
  const rawSolution = generator.solvepuzzle(raw);
  const formatted = raw.map((e) => (e === null ? null : e + 1));
  const formattedSolution = rawSolution.map((e) => e + 1);
  const result = {
    rows: [],
    solution: formattedSolution,
    startTime: new Date(),
    solvedTime: null,
  };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = formatted[i * 9 + j];
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

export function checkSolution(sudoku) {
  const candidate = sudoku.rows.map((row) => row.cols.map((col) => col.value))
    .flat();
    console.log('get it')

  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
      return false;
    }
    console.log('hey')
  }
  return true;
  
}

export default function checkInput(sudoku) {
  const candidate = sudoku.rows.map((row) => row.cols.map((col) => col.value))
    .flat();
    console.log('get it')

  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
      return false;
    }
    console.log('hey')
  }
  return true;
  
}




