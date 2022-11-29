function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let toysCount = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {

            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney += 1;
        } else {
            toysCount += 1;
        }

    }

    let totalToysCost = toyPrice * toysCount;
    savedMoney = (savedMoney + totalToysCost) - stolenMoney;


    if (savedMoney >= washingMachine) {
        console.log(`Yes! ${(savedMoney - washingMachine).toFixed(2)} `);
    } else {
        console.log(`No! ${(washingMachine - savedMoney).toFixed(2)} `);
    }
}

cleverLilly(["21",
    "1570.98",
    "3"])

