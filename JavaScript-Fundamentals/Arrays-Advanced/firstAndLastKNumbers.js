function firstAndLastKNumbers(arr) {
    let kNum = arr.shift();
    let firstArr = arr.slice(0, kNum);
    let secondArr = arr.slice(arr.length - kNum);
    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));

}
firstAndLastKNumbers([2,
    7, 8, 9]
);
firstAndLastKNumbers([3,
    6, 7, 8, 9]
);
