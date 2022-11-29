function equalSums(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let output = '';

    for (let i = start; i <= end; i++) {
        let currentNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (oddSum === evenSum) {
            output += `${i} `;
        }
    }
    console.log(output);
}


equalSums(["100000",
    "100050"])
