function cinema(input) {
    let seats = Number(input[0]);
    let index = 1;
    let command = input[index];
    let profit = 0;
    let counter = seats;

    while (command !== "Movie time!") {
        let currentPeople = Number(input[index]);

        if (counter < currentPeople) {
            console.log(`The cinema is full.`);
            break;
        }

        if (currentPeople % 3 !== 0) {
            profit += currentPeople * 5;
        } else {
            profit += (currentPeople * 5) - 5;
        }
        counter -= currentPeople;

        index++;
        command = input[index];
    }

    if (command === "Movie time!") {
        console.log(`There are ${counter} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${profit} lv.`);
}
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"])

