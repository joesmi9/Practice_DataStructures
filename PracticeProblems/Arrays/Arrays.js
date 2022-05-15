
/**
 * An array is a special variable, which can hold more than one value:
 * 
 * In JavaScript, arrays use numbered indexes.  
 * 
 * In JavaScript, objects use named indexes.
 */

function arrayExamples() {
    /**
     * Using an array literal is the easiest way to create a JavaScript Array.
     * 
     * It is a common practice to declare arrays with the const keyword.
     */

    const testArray = ["item 1", "item 2", "item 3"];

    /**
     * You can also create an array, and then provide the elements:
     */
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";

    /**
     * length
     */
    console.log(cars.length)

    /**
     * push
     */
    testArray.push("item 4");

};

console.log()
arrayExamples();
console.log()
