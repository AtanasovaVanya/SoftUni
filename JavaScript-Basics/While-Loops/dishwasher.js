function dishwasher(input) {
    let bottlesOfDetergent = Number(input[0]);
    let qtyDetergent = bottlesOfDetergent * 750;
    let index = 1;
    let command = input[index];
    let dishes = 0;
    let pots = 0;


    while (command !== "End") {
        if (index === input.length) {
            break;
        }


        let numDishes = Number(command);

        if (index % 3 !== 0) {
            dishes += numDishes;

        }
        if (index % 3 === 0) {
            pots += numDishes;
        }

        index++;
        command = input[index];
    }
    let total = (dishes * 5) + (pots * 15);

    if (command === "End" && total <= qtyDetergent) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${qtyDetergent - total} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(qtyDetergent - total)} ml. more necessary!`);
    }

}

dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"
])

// dishwasher(["2",
//     "53",
//     "65",
//     "55",
//     "End"
// ])


// This solution also works:
// function washMashine(arr) {
//     let detergent = 750;
//     let detergentForDish = 5;
//     let detergentForPot = 15;

//     let detergentQuantity = Number(arr[0]);
//     let index = 1;
//     let circle = 0;
//     let dishes = 0;
//     let pots = 0;

//     while (arr[index] !== "End") {
//         // while (index < arr.length) {
//         if (index === arr.length) {
//             // if (arr[index] === "End") {
//             break;
//         }

//         // circle += 1;

//         // if (circle % 3 !== 0) {
//         if (index % 3 !== 0) {
//             dishes += Number(arr[index]);
//         }

//         // if (circle % 3 === 0) {
//         if (index % 3 === 0) {
//             pots += Number(arr[index]);
//         }
//         index++;
//     }

//     let total = (dishes * detergentForDish) + (pots * detergentForPot);
//     let totalDetergent = detergent * detergentQuantity;

//     if (totalDetergent >= total) {
//         console.log(`Detergent was enough!`);
//         console.log(`${dishes} dishes and ${pots} pots were washed.`);
//         console.log(`Leftover detergent ${totalDetergent - total} ml.`)
//     } else {
//         console.log(`Not enough detergent, ${Math.abs(total - totalDetergent)} ml.more necessary!`)
//     }
// }