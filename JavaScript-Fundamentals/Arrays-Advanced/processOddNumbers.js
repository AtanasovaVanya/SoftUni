function processOddNumbers(arr) {
    // Solved with For Loop:
    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 !== 0) {
    //         result.push(arr[i] * 2);
    //     }
    // }
    // Solved with Array Methods:
    let oddPositions = arr.filter((x, i) => i % 2 !== 0)
    let result = oddPositions.map(x => x * 2);

    console.log(result.reverse().join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);
processOddNumbers([10, 15, 20, 25]);