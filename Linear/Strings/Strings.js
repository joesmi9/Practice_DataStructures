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
    console.log(`String length: ${testString.slice(0, 10)}`)

    /**
     * Slice
     * 
     * If a parameter is negative, the position is counted from the end of the string.
     * This example slices out a portion of a string from position -12 to position -6:
     */
     console.log(`String slice (-12, -6): ${testString.slice(-12, -6)}`)


    console.log(`String length: ${testString.substring(0, 10)}`)

};

console.log()
stringExamples();
console.log()
