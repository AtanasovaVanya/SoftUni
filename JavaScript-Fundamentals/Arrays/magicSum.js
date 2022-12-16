function magicSum(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let firstNum = arr[i];
            let secondNum = arr[j];
            if ((firstNum + secondNum) === num) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6);


