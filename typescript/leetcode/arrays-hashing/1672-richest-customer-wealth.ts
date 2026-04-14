// https://leetcode.com/problems/richest-customer-wealth/
function maximumWealth(accounts: number[][]): number {
  const wealths = accounts.map((wealth) =>
    wealth.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );

  function compareNumbers(a: number, b: number) {
    return a - b;
  }
  wealths.sort(compareNumbers);
  wealths.reverse();
  return wealths[0];
}
