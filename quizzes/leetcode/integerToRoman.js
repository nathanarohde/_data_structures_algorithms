// 3999 cases
// first attempt 168ms top 35% fastest 128ms (fastest solution tried later, clocked at 168ms)
// given that it is testing for every numeral variance is not being caused by randomly generated tests.
// 44MB bottom 5% smallest 39.5MB

var intToRoman = function(num) {
    // 1 to 3999
    // IV - 4, IX - 9
    // XL - 40, XC - 90
    // CD - 400, CM - 900
    // if 1000s print an M  for number in place
    // if 100s 100 - 300 C 400 CD 500 D 600 - 800 DC 900 CM
    // if 10s 10 - 30 X 40 XL 50 L 60 - 80 LX 90 XC
    // if 1s 1 - 3 I 4 IV 5 V 6 - 8 VI 9 XI

    // let numerals = {
    //     '1' : 'I',
    //     '2' : 'II',
    //     '3' : 'III',
    //     '4' : 'IV',
    //     '5' : 'V',
    //     '6' : 'VI',
    //     '7' : 'VII',
    //     '8' : 'VIII',
    //     '9' : 'IX',
    //     '10' : 'X',
    //     '20' : 'XX',
    //     '30' : 'XXX',
    //     '40' : 'XL',
    //     '50' : 'L',
    //     '60' : 'LX',
    //     '70' : 'LXX',
    //     '80' : 'LXXX',
    //     '90' : 'XC',
    //     '100' : 'C',
    //     '200' : 'CC',
    //     '300' : 'CCC',
    //     '400' : 'CD',
    //     '500' : 'D',
    //     '600' : 'DC',
    //     '700' : 'DCC',
    //     '800' : 'DCCC',
    //     '900' : 'CM',
    //     '1000' : 'M',
    //     '2000' : 'MM',
    //     '3000' : 'MMM'
    // }
    //
    // // while num greater than 0
    // let length = Math.ceil(Math.log(num + 1) / Math.LN10);
    // let string = '';
    //
    // while (num > 0){
    //     let currentPlace = Math.pow(10, length - 1);
    //     let currentValue = parseInt(num / currentPlace) * currentPlace;
    //     num -= currentValue;
    //     if (currentValue != 0){
    //      string += numerals[currentValue.toString()];
    //     }
    //     length--;
    // }

    // return string;

// Second Attempt 164ms ~41.4MB bottom 25%
// Top solution, the uncommented part performs at 168ms & 40.9MB
// Array index is more efficent memory structure by ~ 5% & 10%
  let numerals = {
    '10' : ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    '100' : ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    '1000' : ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    '10000' : ['','M','MM','MMM']
  }
//     '1' : ['','I','II','III','IV','V','VI','VII','VIII','IX'],
//     '10' : ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
//     '100' : ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
//     '1000' : ['','M','MM','MMM']
// }

// while num greater than 0
//     let length = Math.ceil(Math.log(num + 1) / Math.LN10);
//     let string = '';

//     while (num > 0){
//         let currentPlace = Math.pow(10, length - 1);
//         let currentValue = parseInt(num / currentPlace);

//         num -= currentValue * currentPlace;
//         string += numerals[currentPlace.toString()][currentValue];
//         length--;
//     }

//     return string;

  let res = '';
  let mod = 1;
  while (num > 0) {
    mod *= 10;
    res = numerals[mod][num % 10] + res;
    num = Math.floor(num / 10);
  }
  return res;
};
