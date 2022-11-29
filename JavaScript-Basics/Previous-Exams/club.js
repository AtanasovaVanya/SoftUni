function club(input) {
    let profitGoal = Number(input[0]);

    let index = 1;
    let command = input[index];
    let endPrice = 0;

    while (command !== "Party!") {
        let cocktailName = command;
        let cocktailPrice = cocktailName.length;
        index++;

        let numOfCocktails = Number(input[index]);

        let totalPrice = cocktailPrice * numOfCocktails;

        if (totalPrice % 2 !== 0) {
            totalPrice = totalPrice * 0.75;
        }
        endPrice += totalPrice;

        if (profitGoal <= endPrice) {
            console.log(`Target acquired.`);

            break;
        }

        index++;
        command = input[index];
    }

    let needMoney = profitGoal - endPrice;
    if (command === "Party!") {
        console.log(`We need ${needMoney.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${endPrice.toFixed(2)} leva.`);


}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"
])

// club(["100",
//     "Sidecar",
//     "7",
//     "Mojito",
//     "5",
//     "White Russian",
//     "10"
//])