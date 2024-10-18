// A function that takes a string as an argument and returns its longest word

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("I will be a good engineer"));
