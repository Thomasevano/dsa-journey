// Pascal's Triangle
// Leetcode: https://leetcode.com/problems/pascals-triangle?q=pascal+triangle
//

function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];
  let lastLine = [1];
  let numberStart = 1;
  while (numberStart < numRows) {
    const line: number[] = [];
    for (let j = 0; j < lastLine.length - 1; j++) {
      line.push(lastLine[j] + lastLine[j + 1]);
    }
    line.push(1);
    line.reverse().push(1);
    line.reverse();
    lastLine = line;
    result.push(line);
    numberStart++;
  }
  return result;
}
