function easterEggsBattle(input) {

    let numOfEggs1 = Number(input[0]);
    let numOfEggs2 = Number(input[1]);

    let index = 2;
    let command = input[index];

    while (command !== "End") {
        let winner = command;

        if (winner === "one") {
            numOfEggs2--;
        } else if (winner === "two") {
            numOfEggs1--;
        }

        if (numOfEggs1 <= 0) {
            console.log(`Player one is out of eggs. Player two has ${numOfEggs2} eggs left.`);
            break;
        } else if (numOfEggs2 <= 0) {
            console.log(`Player two is out of eggs. Player one has ${numOfEggs1} eggs left.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log(`Player one has ${numOfEggs1} eggs left.`);
        console.log(`Player two has ${numOfEggs2} eggs left.`);
    }

}
easterEggsBattle(["2",
    "6",
    "one",
    "two",
    "two"

])