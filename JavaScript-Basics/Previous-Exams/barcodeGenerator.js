function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = "";

    let firstStart = Math.floor(Number(start / 1000));
    let secondStart = Math.floor(Number(start / 100) % 10);
    let thirdStart = Math.floor(Number(start / 10) % 10);
    let fourthStart = Math.floor(Number(start % 10));

    let firstEnd = Math.floor(Number(end / 1000));
    let secondEnd = Math.floor(Number(end / 100) % 10);
    let thirdEnd = Math.floor(Number(end / 10) % 10);
    let fourthEnd = Math.floor(Number(end % 10));


    for (let i = firstStart; i <= firstEnd; i++) {
        if (i % 2 !== 0) {
            for (let j = secondStart; j <= secondEnd; j++) {
                if (j % 2 !== 0) {
                    for (let k = thirdStart; k <= thirdEnd; k++) {
                        if (k % 2 !== 0) {
                            for (let l = fourthStart; l <= fourthEnd; l++) {
                                if (l % 2 !== 0) {
                                    result += `${i}${j}${k}${l}` + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
barcodeGenerator(["1365",
    "5877"])

