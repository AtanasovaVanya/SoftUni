function carNumber(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let generatedNum = "";

    for (let firstDigit = startNum; firstDigit <= endNum; firstDigit++) {
        for (let secondDigit = startNum; secondDigit <= endNum; secondDigit++) {
            for (let thirdDigit = startNum; thirdDigit <= endNum; thirdDigit++) {
                for (let fourthDigit = startNum; fourthDigit <= endNum; fourthDigit++) {


                    if ((firstDigit % 2 !== 0) && (firstDigit > fourthDigit) && ((secondDigit + thirdDigit) % 2 === 0) && (fourthDigit % 2 === 0)) {
                        generatedNum += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}` + " ";
                    }
                    else if ((firstDigit % 2 === 0) && (firstDigit > fourthDigit) && ((secondDigit + thirdDigit) % 2 === 0) && (fourthDigit % 2 !== 0)) {
                        generatedNum += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}` + " ";
                    }

                }
            }
        }
    }
    console.log(generatedNum);
}

carNumber(["2",
    "3"])