/**
 * @param {string} s
 * @return {string}
 */
//Palindrome length is unknown
//Palindrome location is unknown.
//Must be found in a string.

//start with letter -> find matching letters -> scan towards midpoint for match -> if true store result
//find next matching letter -> repeat previous step
//once entire string has been scanned for a character store in object so step is not repeat

// 103 test cases
// Runtime 8760ms bottom 5% Lowest 100ms
// Memory 42.4mb bottom 23% Lowest 35mb
// var longestPalindrome = function(s) {
//   if (s === "") return s;
//   let longestString = s[0];
//   let usedLetters = {};
//
//   function getMatches(i) {
//     let target = new RegExp(s[i], 'gi');
//     let results = new Array();
//
//     while (target.exec(s)){
//       results.push(target.lastIndex - 1);
//     }
//
//     return results;
//   };
//
//   function isPalindrome(string) {
//     let counter = 0;
//     let isPalindrome = true;
//
//     while(counter < Math.floor(string.length / 2) ){
//       if (string[counter] !== string[string.length - counter - 1]){
//         isPalindrome = false;
//         break;
//       }
//       counter++;
//     }
//     return isPalindrome ? string : '';
//   }
//
//   function findPalindrome(matches) {
//     for(let i = 0; i < matches.length - 1; i++){
//       for(let j = 1; j < matches.length; j++){
//         let result = isPalindrome(s.substring(matches[i], matches[j] + 1));
//         if (result.length > longestString.length) longestString = result;
//       }
//     }
//   }
//
//   for( let i = 0; i < s.length; i++){
//     // Cuts off if found palindrome is longer than remaining length
//     if(s.length - i > longestString.length){
//       // If current letter has already been used will skip to next character in string.
//       if (usedLetters[s[i]] === true) continue;
//       usedLetters[s[i]] = true;
//       // Checks if character has any matches, returns all matches
//       let matches = getMatches(i);
//       if (matches.length <= 1) continue;
//       // Look for palindromes is there are matching characters
//       findPalindrome(matches);
//     }
//   }
//
//   return longestString;
// };

function longestPalindrome(s){
  if (s.length < 2) return s;

  left = 0;
  right = 0;
  let maxLen = 1;
}

let d = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";
console.log(longestPalindrome(d));

// 100ms solution
// var longestPalindrome = function(s) {
//     if(s.length < 2) {
//         return s;
//     }
//     var helper = function(i, j, s) {
//         while(i >= 0 && j < s.length && s[i] === s[j]) {
//             i--;
//             j++;
//         }
//         if(j - i - 1 > maxLen) {
//             maxLen = j - i - 1;
//             left = i + 1;
//             right = j - 1;
//         }
//     }
//     let left = 0;
//     let right = 0;
//     let maxLen = 1;
//     for(let i = 0; i < s.length; i++) {
//         helper(i, i + 1, s);
//         helper(i, i, s);
//     }
//
//     return s.substring(left, right + 1);
// };
