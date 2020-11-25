function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  reverse = str.split('').reverse().join('');
  return str === reverse;
}

console.log(isPalindrome("tenet"));