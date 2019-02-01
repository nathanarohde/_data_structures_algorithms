//  Better solution than O(n3)?
// Iterate over strings in array
// Iterate over characters of string looking for matching slice
// Could check if first character matches then check for slice but does this really improve performance?
// Use regex rather than slicing character by charater?
// Iterate over strings in second array to see if they match.

// str.match(/contents of G[i]/).index;
// is there a way to fetch multiple indexes like multiple matches? Yes, is it more performative and enough to matter?
// Performative likely, does it matter on the frontend?  likely shouldn't

// var regex1 = RegExp('foo*','g');
// var str1 = 'table football, foosball';
// var array1;
//
// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }
function gridSearch(G, P) {
    for (let i = 0; i < G.length; i++){
        for (let j = 0; j <= G[i].length - P[0].length; j++){
            if (G[i].slice(j, j + P[0].length) === P[0]) {
                let counter = 1;
                for (let k = 1; k < P.length; k++){
                    if (G[i + counter].slice(j, j + P[k].length) != P[k]) break;
                    counter++;
                }
                if (counter === P.length) return 'YES';
            }
        }
    }
    return 'NO'
}
