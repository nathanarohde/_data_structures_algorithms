// This answer is O(n), O(n)
function isSubsequence(shortString, largeString ){
  // Don't need to split
  // let arrShortString = shortString.split("");
  // let arrLargeString = largeString.split("");
  let counter = 0;

  for (let i=0; i< largeString.length; i++){
    if ( shortString[counter] === largeString[i]){
      counter++;
    }
    if (counter === shortString.length) {
      return true;
    }
  }
  return false;
}

// isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }
// Mostly the same as my solution, string only needs to be converted to array to edit, not to read, split at beginning was uncessary.

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  // Returns true if substring is destroyed Returns false is string is destroyed first
  // if true removes first character of each, if false only removes character of the large string
  // Removes first character of strings but does not rewrite them, it just submits a new string.
  return isSubsequence(str1, str2.slice(1))
}
