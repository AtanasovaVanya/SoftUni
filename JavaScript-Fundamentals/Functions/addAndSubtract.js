
//Function declaration version:
// function addAndSubtract(a, b, c) {
//     let firstSum = sum(a, b);
//     let finalSum = subtract(firstSum, c);

//     console.log(finalSum);

//     function sum(a, b) {
//         return a + b;
//     }

//     function subtract(firstSum, c) {
//         return firstSum - c;
//     }
// }

//Arrow function version:
function addAndSubtract(a, b, c) {
    let sum = (a, b) => {
        return a + b;
    }

    let subtract = (firstSum, c) => {
        return firstSum - c;
    }

    let firstSum = sum(a, b);
    let finalSum = subtract(firstSum, c);

    console.log(finalSum);
}
addAndSubtract(23,
    6,
    10
);