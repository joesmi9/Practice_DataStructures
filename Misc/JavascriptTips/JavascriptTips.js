function templateLiteralInterpolation() {

    /**
     * Template Literal
     * 
     * Using backticks creates a template literal
     * Template literals can be multiline, and you can use ' and " inside of them
     */
    let testString = `Test String Value 1234`;


    /**
     * Interpolation
     * 
     * Template literals provide an easy way to interpolate variables and expressions into strings.
     * 
     * The method is called string interpolation.
     * 
     * The syntax is:
     * 
     * ${}
     */

    const value = '1234'
    let interpolationString = `Test String Value ${value}`;

};

console.log()
templateLiteralInterpolation();
console.log()
