function finalCompetition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let sum = 0;

    switch (place) {
        case "Bulgaria":
            sum = dancers * points;
            if (season === "summer") {
                sum = sum - (sum * 0.05);
            } else if (season === "winter") {
                sum = sum - (sum * 0.08);
            }
            break;
        case "Abroad":
            sum = dancers * points;
            sum += sum * 0.50;
            if (season === "summer") {
                sum = sum - (sum * 0.10);

            } else if (season === "winter") {
                sum = sum - (sum * 0.15);
            }
            break;
    }

    let charity = sum * 0.75;
    let moneyLeft = sum - charity;
    let singleDancerMoney = moneyLeft / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${singleDancerMoney.toFixed(2)}`);
}

finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])

