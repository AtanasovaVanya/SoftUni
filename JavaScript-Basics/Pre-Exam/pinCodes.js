function pinCodes(input) {
    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);


    for (let i = 2; i <= firstNumLimit; i += 2) {
        for (let j = 2; j <= secondNumLimit; j++) {
            if (j == 2 || j == 3 || j == 5 || j == 7) {
                for (let k = 2; k <= thirdNumLimit; k += 2) {
                    console.log(`${i} ${j} ${k}`)
                }
            }
        }
    }
}

pinCodes(["3",
    "5",
    "5"])