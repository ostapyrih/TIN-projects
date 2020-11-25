const getFactorial = n => n > 0 ? n * getFactorial(n - 1) : 1; 


function getIterativeFactorial(n) {
  let output = 1;
  for (let i = 1; i<=n; i++)
    output *= i;
  return output;
}

console.log(getFactorial(6));
console.log(getIterativeFactorial(6));