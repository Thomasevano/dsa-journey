//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
function numberOfSteps(num: number): number {
  let stepsTo0 = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    stepsTo0++;
  }
  return stepsTo0;
}
