function vacation(input) {
    let holidayMoney = Number(input[0]);
    let currentBalance = Number(input[1]);
    let spendDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentBalance < holidayMoney) {
        days++;
        index++;

        if (currentInput === "spend") {
            spendDays++;
            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;

            }
            let moneyToSpend = Number(input[index]);
            currentBalance = currentBalance - moneyToSpend;

            if (currentBalance < 0) {
                currentBalance = 0;
            }

        } else if (currentInput === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            currentBalance += moneyToSave;

        }
        index++;
        currentInput = input[index];
    }

    if (currentBalance >= holidayMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

}

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])

