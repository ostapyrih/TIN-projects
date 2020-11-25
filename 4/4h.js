function getSeconds(arr) {
  arr = arr.sort((a, b) => b - a);
  return [arr[1], arr[arr.length-2]];
}

console.log(getSeconds([25, 10, 5, 2, 1]));