function equalSums(arr) {
    let foundIndex = 'no';
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arrL; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSums([1, 2]);