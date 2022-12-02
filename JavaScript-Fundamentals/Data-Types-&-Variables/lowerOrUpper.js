function lowerOrUpper(char) {
    let asciiValue = char.charCodeAt();

    if (asciiValue >= 97 && asciiValue <= 122) {
        console.log('lower-case');
    } else if (asciiValue >= 65 && asciiValue <= 90) {
        console.log('upper-case')
    };
}
lowerOrUpper('L');