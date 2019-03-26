// 109 test cases
// 56ms vs 52ms top 6%
// 33.8 vs 33.3 bottom 30% Most solution clock in at 33.6 - 33.7

var plusOne = function(digits) {
    let counter = 1;
    if (digits[digits.length - counter] < 9){
       digits[digits.length - counter]++;
    } else {
        while (counter <= digits.length && digits[digits.length - counter] === 9) {
            digits[digits.length - counter] = 0;
            counter++;
        }
        if (counter <= digits.length && digits[digits.length - counter] < 9 ){
            digits[digits.length - counter]++;
        } else {
            digits.unshift(1);
        }

    };
    return digits;
};

console.log(plusOne([8,9,9,9]));
