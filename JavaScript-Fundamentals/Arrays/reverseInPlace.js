function reverseInPlace(arr) {
    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentIndex = arr[i];
        result += `${currentIndex}` + " "
    }
    console.log(result);
}
reverseInPlace(['33', '123', '0', 'dd']);