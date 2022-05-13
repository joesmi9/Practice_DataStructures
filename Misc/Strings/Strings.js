/**
 * String Notes:
 * 
 * In javascript, a string is zero or more characters writen inside quotes.
 * 
 * let text = "Test 123";
 * 
 * A string can be either single or double quotes
 * 
 * let text = "Test 123";
 * let text = 'Test 123';
 *
 */

/**
 * Javascript Strings as Objects
 *  
 * Normally, JavaScript strings are primitive values, created from literals:
 * 
 * let x = "Joe";
 * 
 * But strings can also be defined as objects with the keyword new:
 * 
 * let y = new String("Joe");
 * 
 * You should NOT do this.
 * Do not create Strings objects.
 * The new keyword complicates the code and slows down execution speed.
 * String objects can produce unexpected results:
 */

function stringExamples() {

    let testString = "Test String Value 1234";

    /**
     * Below are some common string functions. 
     */

    console.log(`String: ${testString}`)

    /**
     * Length
     * 
     * Length count starts at 1
     */
    console.log(`String length: ${testString.length}`)

    /**
     * Slice
     * 
     * The index of the first character is 0
     * 
     * slice() extracts a part of a string and returns the extracted part in a new string.
     * The method takes 2 parameters: the start position, and the end position (end not included).
     */
    console.log()
    console.log(`String slice(0, 10): ${testString.slice(0, 10)}`)

    /**
     * Slice
     * 
     * If a parameter is negative, the position is counted from the end of the string.
     * This example slices out a portion of a string from position -12 to position -6:
     */
    console.log(`String slice (-12, -6): ${testString.slice(-12, -6)}`)

    console.log(`String slice (10): ${testString.slice(10)}`)
    console.log(`String slice (-10): ${testString.slice(-10)}`)

    /**
     * Substring:
     * 
     * Substring is similar to slice, the difference is that start and end values less than 0
     * are treated as 0 in substring
     */
    console.log()
    console.log(`String substring(0, 10): ${testString.substring(0, 10)}`)
    console.log(`String substring(10): ${testString.substring(7)}`)
    console.log(`String substring(-10): ${testString.substring(-10)}`)


    /**
     * Char at:
     * 
     * Returns the character at a specific Index (position) in a string
     */
    console.log()
    console.log(`String charAt(0): ${testString.charAt(0)}`)
    console.log(`String charAt(10): ${testString.charAt(10)}`)
    console.log(`String charAt(-1): ${testString.charAt(-1)}`)


    /**
     * Split:
     * 
     * A string can be converted to an array with split
     * Split removes the value that you pass in, and the arrays start at the characters right next to the value
     * Note, if "" is passed in, it will create an array of single characters
     */
    console.log()
    console.log(`String split(" "): ${testString.split(" ")}`)
    console.log(`String split("S"): ${testString.split("S")}`)
    console.log(`String split(""): ${testString.split("")}`)


    /**
     * indexOf:
     * 
     * indexOf returns the first occurence of a specified substring
     * 
     * Returns -1 if not found
     */
    console.log()
    console.log(`Indexof indexOf("T"): ${testString.indexOf("T")}`)
    console.log(`Indexof indexOf(" "): ${testString.indexOf(" ")}`)
    console.log(`Indexof indexOf(" "): ${testString.indexOf("ASDASDAD")}`)



};

console.log()
stringExamples();
console.log()
