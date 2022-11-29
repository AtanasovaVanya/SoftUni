// function traveling(input) {

//     let index = 0;
//     let data = input[index];
//     let destination = '';
//     let minBudget = 0;
//     let money = 0;
//     let savedMoney = 0;

//     while (data !== 'End') {

//         if (data != Number(data)) {
//             destination = data;
//             if (destination) {
//                 minBudget = Number(input[index + 1]);
//                 index++;
//             }
//         } else {
//             money = Number(data);
//             savedMoney += money;
//         }


//         if (savedMoney >= minBudget) {
//             console.log(`Going to ${destination}!`);
//             money = 0;
//             savedMoney = 0;
//             index++;
//             data = input[index];
//             continue;
//         }

//         index++;
//         data = input[index];
//     }
// }


function traveling(input) {

    let destination = input[0];
    let moneyNeeded = input[1];
    let index = 2;

    while (input[index] !== "End") {
        let moneySaved = Number(input[index]);
        moneyNeeded -= moneySaved;
        if (moneyNeeded < 0) {
            console.log(`Going to ${destination}!`);
            destination = input[index + 1];
            moneyNeeded = input[index + 2];
            index += 2;
        }
        index++;

    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
