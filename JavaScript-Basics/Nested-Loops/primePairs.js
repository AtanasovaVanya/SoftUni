function primePairs(input) {
    let start1Pair = Number(input[0]);
    let start2Pair = Number(input[1]);
    let diff1 = Number(input[2]);
    let diff2 = Number(input[3]);

    let maxNum1 = start1Pair + diff1;
    let maxNum2 = start2Pair + diff2;
    let result = "";

    for (let num1 = start1Pair; num1 <= maxNum1; num1++) {
        for (let num2 = start2Pair; num2 <= maxNum2; num2++) {
            if (num1 % 2 !== 0 && num1 % 3 !== 0 && num1 % 5 !== 0 && num1 % 7 !== 0 &&
                num2 % 2 !== 0 && num2 % 3 !== 0 && num2 % 5 !== 0 && num2 % 7 !== 0) {
                result = `${num1}${num2}`;
                console.log(result);
            }
        }
    }
}
primePairs(["10",
    "30",
    "9",
    "6"
])