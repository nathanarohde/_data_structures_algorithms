// function validAnagram(word1, word2) {
//   if (word1.length !== word2.length){
//     return false;
//   }
//   let splitWord1 = word1.split("");
//   let splitWord2 = word2.split("");
//   let word1counter = {};
//   let word2counter = {};
//
//   for (let letter of splitWord1) {
//     word1counter[letter] = (word1counter[letter] || 0) + 1;
//   }
//
//   for (let letter of splitWord2) {
//     word2counter[letter] = (word2counter[letter] || 0) + 1;
//   }
//
//   for (let letter in word1counter) {
//     if (!( letter in word2counter )){
//       console.log('false, letter missing');
//       return false;
//     }
//     if (word1counter[letter] !== word2counter[letter]){
//       console.log('false, different # of occurences');
//       return false;
//     }
//   }
//   console.log('true');
//   return true;
// }

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
