let searchArray = (arr, n) => {
  let start = 0, end = arr.length-1;

  while(start<=end) {
    const i = Math.floor((start + end)/2); 
    
    if (arr[i]===n) return i;

    if (arr[i] < n) start = i + 1; 
    else end = i - 1; 
  }

  return -1;
}

console.log(searchArray([1, 5, 10, 20, 30, 50, 100, 200], 100));