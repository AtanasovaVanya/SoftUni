function nonDecreasingSubset(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNumber = arr[i];

        if (currentNumber >= biggest) {
            biggest = currentNumber;
            result.push(biggest);
        }
    }
    console.log(result.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);