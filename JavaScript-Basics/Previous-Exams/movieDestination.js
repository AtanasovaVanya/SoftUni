function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let total = 0;
    let price = 0;

    switch (destination) {
        case "Dubai":
            if (season === "Summer") {
                price = 40000;
                total = (days * price) * 0.70;
            } else if (season === "Winter") {
                price = 45000;
                total = (days * price) * 0.70;
            }
            break;
        case "Sofia":
            if (season === "Summer") {
                price = 12500;
                total = (days * price) + ((days * price) * 0.25);
            } else if (season === "Winter") {
                price = 17000;
                total = days * price;
                total = (days * price) + ((days * price) * 0.25);
            }
            break;
        case "London":
            if (season === "Summer") {
                price = 20250;
                total = days * price;
            } else if (season === "Winter") {
                price = 24000;
                total = days * price;
            }
            break;
    }

    if (budget > total) {
        console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(total - budget).toFixed(2)} leva more!`);
    }
}
movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"])

