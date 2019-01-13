// Non-recursive
// function isPalindrome(string){
//  for (let i=0; i<= Math.floor(string.length/2); i++){
//    if( string[i] != string[(string.length - 1) - i]){
//      return false;
//    }
//  }
//  return true;
// }

// recursive
function isPalindrome(string) {
  if (string.length <= 1) return true;
  if (string[string.length - 1] !== string[0]) return false;
  return isPalindrome(string.substring(1, string.length - 1));
}


console.log(isPalindrome('amanaplanacanalpanama'));
