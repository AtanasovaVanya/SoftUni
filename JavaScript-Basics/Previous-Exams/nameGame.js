
function nameGame(input) {
    let index = 0;
    let name = input[index];
    let currentPoints = 0;
    let maxPoints = 0;
    let winner = '';

    while (name !== "Stop") {
        currentPoints = 0;
        for (let i = 0; i < name.length; i++) {
            index++;
            let currentNumber = Number(input[index]);

            if (name[i].charCodeAt() === currentNumber) {
                currentPoints += 10;
            } else {
                currentPoints += 2;
            }

        }
        if (currentPoints >= maxPoints) {
            maxPoints = currentPoints;
            winner = name;
        }
        index++;
        name = input[index];
    }


    console.log(`The winner is ${winner} with ${maxPoints} points!`);
}
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"])

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])


