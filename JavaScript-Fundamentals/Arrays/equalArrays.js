function equalArrays(arr1, arr2) {
    let sumArr1 = 0;
    let arr1L = arr1.length;

    for (let i = 0; i < arr1L; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sumArr1 += Number(arr1[i]);
    }
    console.log(`Arrays are identical. Sum: ${sumArr1}`);

}
equalArrays(['1'], ['10'])