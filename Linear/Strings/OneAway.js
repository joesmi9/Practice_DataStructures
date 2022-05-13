/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. 
 * 
 * Given two strings, write a function to check if they are one edit (or zero edits) away. 
 */


function isOneEditAway(first, second) {

    if (first.length === second.length) {
        return oneEditReplace(first, second);
    }
    else if (first.length + 1 === second.length) {
        return (oneEditInsert(first, second));
    } else if (second.length + 1 === first.length) {
        return (oneEditInsert(second, first));
    }

    return false;
}

function oneEditReplace(string1, string2) {

    for (let i = 0; i < string1.length; i++) {
        if (string1.charAt(i) != string2.charAt(i)) {
            string1 = string1.substring(0, i) + string2.charAt(i) + string1.substring(i + 1);

            if (string1 == string2) {
                return true;
            } else {
                return false;
            }
        }
    }

    return true;
}

function oneEditInsert(shortString, longString) {

    for (let i = 0; i < longString.length; i++) {
        if (shortString.charAt(i) != longString.charAt(i)) {

            longString = longString.substring(0, i) + longString.substring(i + 1);

            if (shortString == longString) {
                return true;
            } else {
                return false;
            }
        }
    }
}


console.log(isOneEditAway("cat", "cat"));
