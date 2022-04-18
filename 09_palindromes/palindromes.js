const palindromes = function (text) {
  const regex = /[^A-Za-z0-9]/g;
  const cleanedText = text.replace(regex, "").toLowerCase();
  const stringSize = cleanedText.length;

  const firstHalf = cleanedText.slice(0, Math.floor(stringSize/2));
  const secondHalf = cleanedText.slice(Math.ceil(stringSize/2), stringSize).split("").reverse().join("");

  return firstHalf === secondHalf;

};

// Do not edit below this line
module.exports = palindromes;