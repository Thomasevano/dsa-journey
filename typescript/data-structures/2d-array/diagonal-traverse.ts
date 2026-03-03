function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = [];
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m + n - 1; i++) {
    const diagLine: number[] = [];

    let rows = i < n ? 0 : i - n + 1;
    let cols = i < n ? i : n - 1;

    while (rows < m && cols > -1) {
      diagLine.push(mat[rows][cols]);
      ++rows;
      --cols;
    }

    if (i % 2 === 0) {
      diagLine.reverse();
    }

    result.push(...diagLine);
  }

  return result;
}
