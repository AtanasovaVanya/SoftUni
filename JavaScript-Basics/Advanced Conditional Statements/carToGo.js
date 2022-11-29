function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let theClass = "";
    let carType = "";
    let price = 0;

    if (budget <= 100) {
        theClass = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio";
            price = budget * 0.35;
        } else if (season === "Winter") {
            carType = "Jeep";
            price = budget * 0.65;
        }
    }

    if (budget > 100 && budget <= 500) {
        theClass = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            price = budget * 0.45;
        } else if (season === "Winter") {
            carType = "Jeep";
            price = budget * 0.80;
        }
    }

    if (budget > 500) {
        theClass = "Luxury class";
        carType = "Jeep";
        price = budget * 0.90;
    }

    console.log(`${theClass}`);
    console.log(`${carType} - ${price.toFixed(2)}`);
}

carToGo(["70.50",
    "Winter"
])