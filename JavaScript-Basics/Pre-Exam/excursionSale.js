function excursionSale(input) {
    let seaExcursion = Number(input[0]);
    let mountainExcursion = Number(input[1]);
    let index = 2;
    let command = input[index];

    let sum = 0;
    let seaPackage = seaExcursion;
    let mountainPackage = mountainExcursion;

    while (command !== "Stop") {
        let type = command;
        if (type === "sea" && seaPackage > 0) {
            sum += 680;
            seaPackage -= 1;
        } else if (type === "mountain" && mountainPackage > 0) {
            sum += 499;
            mountainPackage -= 1;
        }

        if (seaPackage == 0 && mountainPackage == 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
        index++;
        command = input[index];

    }
    console.log(`Profit: ${sum} leva.`);
}

excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
