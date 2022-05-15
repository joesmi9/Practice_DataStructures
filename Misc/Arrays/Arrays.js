
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

    const array_name = ["item 1", "item 2", "item 3"];

    /**
     * You can also create an array, and then provide the elements:
     */
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";

    cars.push("test")


    /**
     * length
     */

    console.log(cars.length)

};

console.log()
arrayExamples();
console.log()
