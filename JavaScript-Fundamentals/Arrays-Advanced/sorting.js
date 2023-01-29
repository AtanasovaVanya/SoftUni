function sorting(arr) {
    let finalArr = [];
    let array = arr.sort((a, b) => a - b);

    while (array.length !== 0) {
        finalArr.push(array.pop(), array.shift());
    }
    console.log(finalArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);