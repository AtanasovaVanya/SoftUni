function palindromeIntegers(arr) {

    for (let num of arr) {
        let currentNum = num.toString();
        let reversedStr = currentNum.split('').reverse().join('');

        if (reversedStr === currentNum) {
            console.log(true);
        } else {
            console.log(false);
        }

    }

}
palindromeIntegers([32, 2, 232, 1010])