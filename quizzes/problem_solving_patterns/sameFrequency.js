function sameFrequency(num1, num2){
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");
  if (arr1.length != arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let val of arr1){
    obj1[val] = (obj1[val] || 0) + 1
  }

  for (let val of arr2){
    obj2[val] = (obj2[val] || 0) + 1
  }

  for (val in obj1){
    if (obj1[val] != obj2[val]){
      return false
    }
  }
  return true;
}
