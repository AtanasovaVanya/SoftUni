function easterShop(input) {
    let eggsAmount = Number(input[0]);
    let index = 1;
    let command = input[index];
    let soldEggs = 0;

    while (command !== "Close") {
        let service = command;
        index++;
        let newAmount = Number(input[index]);

        if (service === "Buy") {
            if (eggsAmount < newAmount) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggsAmount}.`);
                break;
            }
            soldEggs += newAmount;
            eggsAmount -= newAmount;

        } else if (service === "Fill") {
            eggsAmount += newAmount;
        }

        index++;
        command = input[index];
    }
    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
    }
}
easterShop(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"])


