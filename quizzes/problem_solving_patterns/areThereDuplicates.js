function areThereDuplicates(...args){
  let values = {}
  for (let target in args){
    if (values[args[target]]){
      return true;
    } else {
      values[args[target]] = true;
    }
  }
  return false;
}
