function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let accommodation = "";
    let location = "";
    let price = 0;

    if (budget <= 1000) {
        accommodation = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.45;
        }
    }

    if (budget > 1000 && budget <= 3000) {
        accommodation = "Hut";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.80;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.60;
        }
    }

    if (budget > 3000) {
        accommodation = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.90;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.90;
        }
    }

    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}

vacation(["799.50",
    "Winter"
])