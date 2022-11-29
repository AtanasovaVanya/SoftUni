function match(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numPeople = Number(input[2]);
    let diff = 0;
    let ticket = 0;
    let transport = 0;
    let ticketsPrice = 0;


    if (category === "VIP") {
        ticket = 499.99;
    } else {
        ticket = 249.99;
    }


    switch (category) {
        case "VIP":
        case "Normal":
            if (numPeople >= 1 && numPeople <= 4) {
                transport = budget * (75 / 100);
                diff = budget - transport;
                ticketsPrice = ticket * numPeople;

            }
            else if (numPeople >= 5 && numPeople <= 9) {
                transport = budget * (60 / 100);
                diff = budget - transport;
                ticketsPrice = ticket * numPeople;
            }
            else if (numPeople >= 10 && numPeople <= 24) {
                transport = budget * (50 / 100);
                diff = budget - transport;
                ticketsPrice = ticket * numPeople;
            }
            else if (numPeople >= 25 && numPeople <= 49) {
                transport = budget * (40 / 100);
                diff = budget - transport;
                ticketsPrice = ticket * numPeople;
            }
            else if (numPeople >= 50) {
                transport = budget * (25 / 100);
                diff = budget - transport;
                ticketsPrice = ticket * numPeople;
            }



            if (diff < ticketsPrice) {
                console.log(`Not enough money! You need ${Math.abs(ticketsPrice - diff).toFixed(2)} leva.`);

            } else {
                console.log(`Yes! You have ${Math.abs(ticketsPrice - diff).toFixed(2)} leva left.`);
            }
            break;

    }
}

match(["30000",
    "VIP",
    "49"
])