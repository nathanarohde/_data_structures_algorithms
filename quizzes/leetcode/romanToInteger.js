// 3999 test cases
// Runtime 168ms top 30% fastest solution identical 132ms (variance)
// Memory 39.6MB top 7%

var romanToInt = function(s) {
    // II, XX, CC, MM add
    // XVI, XI , LVI, LXI add
    // XLIX - 49, IX - 9, XCIX - 99, XC - 90
    // Iterate over string, parse it, add or subtract
    // Character directly correlates to number with exceptions
    // IV, IX, XL, XC, CD, CM - exceptions occur when lower character percedes higher character

    let numerals = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    counter = 0;
    total = 0;

    while ( counter < s.length ){
        if ( counter + 1 < s.length && numerals[s[counter]] < numerals[s[counter + 1]]){
            total += (numerals[s[counter + 1]] - numerals[s[counter]])
            counter += 2;
        } else {
            total += numerals[s[counter]];
            counter++;
        }
    }

    return total;

};
