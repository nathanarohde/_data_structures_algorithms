//294 Test cases
// 50% percentile 80ms vs 60ms
// Top 20% 35.5MB vs 35MB
var addBinary = function(a, b) {
    // Get longest string
    // Add shortest string into longest string
    let smallest = '';
    let largest = '';
    if (a.length >= b.length){
        largest = a;
        smallest = b;
    } else {
        largest = b;
        smallest = a;
    }

    let largestArray = largest.split('');
    let smallestArray = smallest.split('');

    // Zero position is the place of the highest digit therefore place in array may be different
    // Therefore lengthDiff is used to find location of shared digit
    // Must move from back to front
    let carry = 0;
    let lengthDiff = largest.length - smallest.length;
    for (let i = smallestArray.length - 1; i >= 0 ; i--){
        let currentValue = parseInt(smallestArray[i]) + parseInt(largestArray[i + lengthDiff]) + carry;
        switch(currentValue){
            case 3:
                largestArray[i + lengthDiff] = 1;
                carry = 1;
                break;
            case 2:
                largestArray[i + lengthDiff] = 0;
                carry = 1;
                break;
            default:
                largestArray[i + lengthDiff] = currentValue;
                carry = 0;
        }
    }

    let counter = lengthDiff - 1;
    while (carry > 0 && counter >= 0 ){
      let currentValue = parseInt(largestArray[counter]) + carry;
      switch(currentValue){
          case 2:
              largestArray[counter] = 0;
              carry = 1;
              break;
          default:
              largestArray[counter] = currentValue;
              carry = 0;
      }
      counter--;
    }

    // for (let i = lengthDiff - 1; i >= 0; i--){
    //   let currentValue = parseInt(largestArray[i]) + carry;
    //   switch(currentValue){
    //       case 2:
    //           largestArray[i] = 0;
    //           carry = 1;
    //           break;
    //       default:
    //           largestArray[i] = currentValue;
    //           carry = 0;
    //   }
    // }

    if (carry === 1){
        largestArray.unshift('1')
    }
    return largestArray.join('');
};


// Uses ternary rather than case making for easier reading, frames problem in a way where only 1 loop is required
//Fastest solution
// var addBinary = function(a, b) {
//     const lenA = a.length;
//     const lenB = b.length;
//     const max = (lenA > lenB) ? lenA : lenB;
//     let sum = '';
//     let carryOver = 0;
//
//     for (let i = 0; i < max; i += 1) {
//         const posA = (a[lenA - i - 1]) || 0;
//         const posB = (b[lenB - i - 1]) || 0;
//         const curr = Number(posA) + Number(posB) + carryOver;
//         carryOver = (curr >= 2) ? 1 : 0;
//         sum = `${curr % 2}${sum}`;
//     }
//
//     if (carryOver) {
//         sum = `1${sum}`;
//     }
//     return sum;
//
// };

console.log('addBinary: ' + addBinary('1010','1011'));
