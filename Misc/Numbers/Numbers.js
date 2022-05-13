
/**
 * JavaScript has only one type of number. Numbers can be written with or without decimals.
 */

function numberExamples() {
    let x = 3.14;    // A number with decimals
    let y = 3;       // A number without decimals

    /**
     * JavaScript Numbers are Always 64-bit Floating Point
     * 
     * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
     * 
     * JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
     * 
     * This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:
     */

    let a = 999999999999999;   // a will be 999999999999999
    let b = 9999999999999999;  // b will be 10000000000000000


    /**
     * toString()
     * 
     * The toString() method returns a number as a string.
     */

    console.log(`Number to string: ${a.toString()}`);


    /**
     * Number("123")
     * 
     * Converts a variable to a number
     */
    console.log(`Variable to number: ${Number("123")}`);
};

console.log()
numberExamples(); å
console.log()
