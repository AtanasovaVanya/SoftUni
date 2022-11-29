function luckyNumbers(input) {
    let n = Number(input[0]);

    let result = "";

    for (let i = 1; i <= 9; i++) {
        let firstDigit = Number(i);
        for (let j = 1; j <= 9; j++) {
            let secondDigit = Number(j);
            for (let k = 1; k <= 9; k++) {
                let thirdDigit = Number(k);
                for (let l = 1; l <= 9; l++) {
                    let fourthDigit = Number(l);

                    let first2Sum = firstDigit + secondDigit;
                    let second2Sum = thirdDigit + fourthDigit;

                    if ((first2Sum === second2Sum) && (n % first2Sum === 0)) {
                        result += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}` + " ";

                    }
                }
            }
        }
    }
    console.log(result);
}
luckyNumbers(["3"]);