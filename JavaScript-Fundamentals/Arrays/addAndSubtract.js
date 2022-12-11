function addAndSubtract(arr) {

    let sumWorkArr = 0;
    let sumOrigin = 0;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];
        sumOrigin += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        sumWorkArr += currentNum;
    }
    console.log(arr);
    console.log(sumOrigin);
    console.log(sumWorkArr);
}
addAndSubtract([-5, 11, 3, 0, 2])