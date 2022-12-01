function reverseString(str) {
    let splitString = str.split("");
    let reverseArr = splitString.reverse();
    let joinArr = reverseArr.join("");
    console.log(joinArr);
}
reverseString("Hello");