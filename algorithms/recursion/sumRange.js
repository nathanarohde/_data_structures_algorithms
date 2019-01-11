function sumRange(num){
  if(num === 1) return 1;
  console.log(num);
  return num + sumRange(num-1);
}

sumRange(5);
