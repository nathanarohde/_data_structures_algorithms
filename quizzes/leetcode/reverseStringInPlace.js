// Recursive, not O(1) and for string not array;
// var reverseString = function(s) {
//     if (s.length <= 1) return s[0];
//     return s.slice(-1) + reverseString(s.slice(0, -1));
// };

// Recursive, apparently not O(1)
// var reverseArray = function(s) {
//   if (s.length <= 1) return s;
//   return reverseArray(s.slice(1)).concat(s[0]);
// }

// space complexity O(1) but not recursive
var reverseArrayInPlace = function(s){
  for (let i= 0; i < Math.floor(s.length/2); i++){
    let old = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = old;
  }
  return s;
}

// console.log(reverseString('hello'));
// console.log(reverseArray(["h","e","l","l","o"]));
console.log(reverseArrayInPlace(["h","e","l","l","o"]));
