'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(string) {
  var output = {};
    for (var i = 0; i < string.length; i++) {
      var letter = string.charAt(i);
        if (output[letter]) {
          output[letter]++;
        } else {
           output[letter] = 1;
    }
  }
  return output;
};

console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}

//http://www.w3schools.com/jsref/jsref_charat.asp
//bocs de ez segitett remelem azert nem lesz nullas :( (lecci)
