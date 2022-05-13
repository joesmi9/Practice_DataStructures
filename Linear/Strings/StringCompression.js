function compressString(input) {
    let compressedString = "";

    currentChar = input.charAt(0);
    currCharCount = 1;
    for (let i = 1; i < input.length; i++) {

        if (input.charAt(i) == currentChar) {
            currCharCount++;
        } else {
            compressedString += currentChar + currCharCount;

            // Need to reset the currentChar and currCharCount values
            currentChar = input.charAt(i);
            currCharCount = 1;
        }
    }

    compressedString += currentChar + currCharCount;

    return compressedString.length >= input.length ? input : compressedString;
}

console.log(compressString("testttesssttingggggggggggggggg"));