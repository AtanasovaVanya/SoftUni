function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let flag = false;
    let combinationCounter = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startNumber; j <= endNumber; j++) {
            let result = i + j;
            combinationCounter++;
            if (result === magicNumber) {
                flag = true;
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);

                break;
            }
        }
        if (flag == true) {
            break;
        }
    }

    if (flag == false) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["23",
    "24",
    "20"])
