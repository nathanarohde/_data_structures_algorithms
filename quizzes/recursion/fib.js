
// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// function fib(num){
//   if (num <= 1) return 1;
//   return fib(num - 1) + fib(num - 2);
// }
// 2^n

// memotization stores the results of expensive function calls
function fib(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <=1 ) return 1;

  return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
}

fib(4);
console.log(fib(4));
