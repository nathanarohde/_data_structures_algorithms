function factorial(num){
  if (num <= 1) return 1;
  return num *= factorial(num - 1);
}

console.log(factorial(6));
// All factorials must have base case;
// With recursion you depend on the function stack to track the final result rather than a variable.
// Make sure to return the correct thing.
