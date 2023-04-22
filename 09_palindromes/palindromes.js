// Sat Apr 22/23 1248hrs

const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-z0-9]/i.test(char)) {
      cleanedStr += char.toLowerCase();
    }
  }
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}; 

// Do not edit below this line
module.exports = palindromes;
