function getLongestWord(str) {
  if (typeof(str) != "string")
    return null;

  longest = "";
  str.split(" ").forEach(element => {
    if (element.length > longest.length)
      longest = element
  });
  return longest;
}

console.log(getLongestWord("test phrase to search word"));