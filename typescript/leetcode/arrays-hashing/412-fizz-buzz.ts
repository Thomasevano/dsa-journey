// https://leetcode.com/problems/fizz-buzz/
function fizzBuzz(n: number): string[] {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = `${i + 1}`;
  }

  for (let i = 0; i < array.length; i++) {
    const isDivisibleBy3 = parseInt(array[i]) % 3 === 0;
    const isDivisibleBy5 = parseInt(array[i]) % 5 === 0;
    let currentStr = "";

    if (isDivisibleBy3) {
      currentStr += "Fizz";
    }
    if (isDivisibleBy5) {
      currentStr += "Buzz";
    }
    if (currentStr.length === 0) {
      currentStr += parseInt(array[i]);
    }
    array[i] = currentStr;
  }
  return array;
}
