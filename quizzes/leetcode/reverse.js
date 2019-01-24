// Solutions perform the same in bench testing? 92ms

// highest performing
var reverse = function(b) {
    let a = 0;
    let max_range = Math.pow(2,31) -1;
    let min_range = Math.pow(-2,31);

    while(b !== 0){
        a = a * 10 + b % 10;
        b = parseInt(b/10);
    }

    if(a>max_range || a<min_range) a = 0;
    return a;
};

// mine
var reverse = function(x) {
    let reverse = 0;
    let original = Math.abs(x);
    while(original != 0){
        reverse *= 10;
        reverse += original % 10;
        original -= original % 10;
        original /= 10;
    }
    if (reverse > 2147483641 || reverse < -2147483641) {
        return 0;
    }

    return x > 0 ? reverse : -reverse;
};

console.log(reverse(2147483641));
