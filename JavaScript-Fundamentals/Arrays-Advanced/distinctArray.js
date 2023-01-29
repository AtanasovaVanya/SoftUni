function distinctArray(arr) {
    //First version:
    let uniqueNumbers = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(uniqueNumbers.join(' '));

    // Second version:
    // let uniqueNumbers = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!uniqueNumbers.includes(arr[i])) {
    //         uniqueNumbers.push(arr[i]);
    //     }
    // }
    // console.log(uniqueNumbers.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);