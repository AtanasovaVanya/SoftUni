function combinations(input) {
    let number = Number(input[0]);
    let validCombinationCounter = 0;
    let flag = false;

    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                validCombinationCounter++;
                let sum = x1 + x2 + x3;
                if (sum === number) {
                    flag = true;
                    break;
                }

            }
        }
        if (flag) {
            break;
        }
    }
    console.log(validCombinationCounter);

}

combinations(["25"])