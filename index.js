function isPalindrome(word) {
  for (let start = 0 ; start < word.length / 2; start++) {
    const end = word.length - 1 - start;
    if (word[start] !== word[end]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  start from the first string to the middle and compare to the last string to the middle
  is the letters don't match return false
  if all letters match return true
*/

/*
  Add written explanation of your solution here
  use a for(let i = 0; i < word.length/2; i++) to go through half the string
  create a const and give it the word.length -1 -i;
  if the const doesn't match i return false
  else return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
