'use strict';

var isAVowel = function(lttr){
  // your code goes here
    const vowel = "aeiou";
    for( let i=0; i < lttr.length; i++ ){
        if( vowel.includes(lttr[i]) ){
            return true;
        }
    }
    return false;
};

module.exports = isAVowel;
