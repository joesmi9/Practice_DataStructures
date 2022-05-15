/**
 * Given a string, write a function to check if it is a permutation of a palindrome. 
 * A palindrome is a word or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
 * 
 * In other words, check if a given string could be a palindrome
 */

function isPalindromePermutation(input) {

    let charMap = new Map();

    for (const char of input) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }


    // If string is even
    if (input.length % 2 === 0) {
        for (const value of charMap.values()) {
            if (value % 2 != 0) {
                return false;
            }
        }
    }


    // If string is odd
    if (input.length % 2 === 1) {

        let oddValueCount = 0;

        for (const value of charMap.values()) {
            if (value % 2 != 0) {
                oddValueCount++;

                if (oddValueCount > 1) {
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(isPalindromePermutation("abcabcs"))