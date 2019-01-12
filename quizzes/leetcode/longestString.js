// var lengthOfLongestSubstring = function(s) {
//   let currentString = []
//   let longestString = 0;
//   for (let i=0; i< s.length; i++){
//       for (let j=0; j < currentString.length; j++){
//         if (currentString[j] === s[i]){
//           longestString = Math.max(longestString, currentString.length);
//           i = i - (currentString.length - 1)
//           currentString = [];
//         }
//       }
//       currentString.push(s[i]);
//   };
//   longestString = Math.max(longestString, currentString.length);
//   return longestString;
// };

var lengthOfLongestSubstring = function(s){
  longestString = 0;
  currentString = { total: 0 };
  for (let i=0; i < s.length; i++){
    if ( currentString[s[i]] === 1){
      longestString = Math.max(longestString, currentString.total);
      i = i - (currentString.total - 1)
      currentString = { total: 0 };
    }
    currentString[s[i]] = 1
    currentString.total++
  }
  return Math.max(currentString.total, longestString);
}
// console.log(lengthOfLongestSubstring('pqpwry'))

// console.log(lengthOfLongestSubstring('dvdfdkgpa'))
