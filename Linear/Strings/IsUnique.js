/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 * 
 * Part 2: What if you cannot use additional data structures?
 */

function isUnique(input) {

    if (input === undefined || input === null || typeof (input) != "string") {
        throw "Input is undefined"
    }

    let charMap = new Map();

    for (let char of input.split("")) {
        if (charMap.has(char)) {
            return false;
        } else {
            charMap.set(char);
        }
    }
    return true;
}

/**
 * If you can't use additional data structues
 * 
 * Maybe try sort, and then iterate through with a staggered index and see if they're equal.
 */

console.log(isUnique("abcdefg"));
console.log(isUnique("abcdefga"));

console.log(isUnique(""));
// console.log(isUnique(null));
console.log(isUnique(12));

