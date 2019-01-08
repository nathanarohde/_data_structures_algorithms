function addUpTo(n) {
  let total = 0;
  for (let i = 1; i<= n; i++) {
    total += 1;
  }
  return total;
}
// 2 assignments + 2n additions + 2n assignments and n comparisons 5n + 2
// As n grows operations grow with n
// linear time O(f(n)) = n

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
