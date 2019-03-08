//bottom 30% 72ms fastest 48ms
//bottom 30% 33.8mb smallest 33.4mb

// var lengthOfLastWord = function(s) {
//     // if no word return zero
//     // else parse all spaces
//     // lastWordLength must be greater than 0 and character must not be space
//     lastWordLength = 0;
//     while ( s ){
//         if (s[s.length - 1] !== ' '){
//           lastWordLength++
//         } else if (lastWordLength > 0){
//           break;
//         }
//         s = s.substring(0, s.length - 1)
//
//     }
//     return lastWordLength;
// };

//Duplicate of fastest solution
// 56ms
//33.9MB
var lengthOfLastWord = function(s) {
  // trim removes spaces surrounding string
  const string = s.trim();
  // lastIndexOf likely a for loop similar to indexOf
  return string.slice(string.lastIndexOf(' ') + 1, string.length).length;
}

console.log(lengthOfLastWord('sp stuff'));
