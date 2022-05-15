/**
 * Check Permutation: 
 * 
 * Given two strings, write a method to decide if one is a permutation of the other. 
 */

function isPermutation(stringA, stringB) {

    /**
     * First check, if the legnths arent the same, it's false
     */

    if (stringA.length != stringB.length) {
        return false;
    }

    /**
     * Increment the count of all letters into a map for the first word. 
     * 
     * Decrement the count of letters for the second word.
     * 
     * Iterate through the map and see if each value is equal to 0
     */
    let charMap = new Map();
    for (const char of stringA) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        }
        else {
            charMap.set(char, 1);
        }
    }

    for (const char of stringB) {
        if (!charMap.has(char)) {
            return false;
        }
        else {
            charMap.set(char, charMap.get(char) - 1);
        }
    }

    for (let value of charMap.values()) {
        if (value != 0) {
            return false;
        }
    };

    return true;

}

console.log(isPermutation("taaestcv", "testaavc"))