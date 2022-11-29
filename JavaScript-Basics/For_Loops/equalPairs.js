function equalPairs(input) {
    let numOfPairs = Number(input[0]);


    let previousSum = 0;
    let maxDiff = 0;


    for (let i = 1; i < input.length; i += 2) {
        let firstNum = Number(input[i]);
        let secondNum = Number(input[i + 1]);


        let previousSum = firstNum + secondNum;


        let thirdNum = Number(input[i + 2]);
        let fourthNum = Number(input[i + 3]);
        let currentSum = thirdNum + fourthNum;
        console.log(currentSum, previousSum)

        //     if (i > 0) {
        //         let diff = Math.abs(currentSum - previousSum);
        //         if (diff > maxDiff) {
        //             maxDiff = diff;
        //         }
        //     }
        // }
        // if (maxDiff == 0) {
        //     console.log(`Yes, value=${previousSum}`)
        // } else {
        //     console.log(`No, maxdiff=${maxDiff}`)
        // }
    }
}
equalPairs(["3",
    "1",
    "2",
    "0",
    "3",
    "4",
    "-1"
])

// equalPairs(["2",
//     "-1",
//     "2",
//     "0",
//     "1"
// ])

// equalPairs(["1",
//     "5",
//     "5"])