function repeatString(text, repeats) {
    let result = "";
    for (let i = 1; i <= repeats; i++) {
        result += text;
    }
    return result;
}

console.log(repeatString("abc", 3));
