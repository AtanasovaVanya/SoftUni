function maxNumber(arr) {
    let newArr = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) { //it holds a number
        let number1 = arr[i];
        let isLargest = true;

        for (let j = i + 1; j < arrL; j++) { //it compares the number with the next one
            let number2 = arr[j];

            if (number1 <= number2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArr.push(number1);
        }
    }
    console.log(newArr.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);