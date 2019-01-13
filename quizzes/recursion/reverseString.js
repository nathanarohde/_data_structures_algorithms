// Non-recursive
// function reverse(string){
//   let stringHash = {}
//   let stringArray = []
//   for( let i=0; i < string.length; i++){
//     stringHash[i] = string[i];
//   }
//   for( let i=string.length - 1; i >= 0; i--){
//     stringArray.push(stringHash[i]);
//   }
//   return stringArray.join("");
// }
// flip placement of characters around middle
// even or odd?
// a string that maintains length can not be passed as a base condition as there is nothing to track
// recursive
// function reverse(string){
//   let counter = Math.floor(string.length/2);
//   let stringArray = string.split("");
//
//   function iterate(stringArray){
//     if (counter <= 0) return stringArray.join("");
//     let temp = stringArray[counter - 1];
//     stringArray[counter - 1] = stringArray[string.length - counter];
//     stringArray[string.length - counter] = temp;
//     counter--;
//     return iterate(stringArray);
//   }
//
//   return iterate(stringArray);
// }

// works because of how the call stack works
// removes first character a places it at end
// actual solution
function reverse(str){
	if (str.length <= 1) return str;
  // console.log((str.slice(1)) + str[0]);
	return reverse(str.slice(1)) + str[0];
}
console.log(reverse('awesome'));
