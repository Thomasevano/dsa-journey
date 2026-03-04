// Leetcode
// https://leetcode.com/problems/largest-number-at-least-twice-of-others/
//
function dominantIndex(nums: number[]): number {
  const sortedArray = nums.toSorted((a: number, b: number) => a - b);
  const largestElement = sortedArray.pop();

  let largestElementIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === largestElement) {
      largestElementIndex = i;
    } else if (!(largestElement >= 2 * nums[i])) {
      return -1;
    }
  }
  return largestElementIndex;
}
