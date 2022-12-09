function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([2, 4, 6, 8, 10]);