let word1 = prompt("enter a word");
let word2 = prompt("enter another word");

if ( word1.length === word2.length ) {
     alert( word1 + " is equal to " + word2 + " with a length of " + word1.length ) }
else if ( word1.length > word2.length) {
     alert( word1 + " is longer than " + word2 + " with a length of " + word1.length ) }
else {
     alert( word2 + " is longer than " + word1 + " with a length of " + word2.length ) };