var isPalindrome = function(x) {
    if (x < 0) return false;
    numString = x.toString();
    stringLength = numString.length;
    for (let i = 0; i < stringLength; i++) {
      if( numString[i] != numString[(stringLength - 1) - i]) return false;
    }
    return true;
};

console.log(isPalindrome(-12121));
