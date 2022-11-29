function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let type = "";
    let cost = 0;

    switch (season) {
        case "summer":
            type = "Camp";
            break;

        case "winter":
            type = "Hotel";
            break;
    }


    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            cost = budget * 0.30;
        } else if (season === "winter") {
            cost = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            cost = budget * 0.40;
        } else if (season === "winter") {
            cost = budget * 0.80;
        }

    } else if (budget > 1000) {
        destination = "Europe";
        type = "Hotel";
        cost = budget * 0.90;

    }

    console.log(`Somewhere in ${destination} `);
    console.log(`${type} - ${cost.toFixed(2)}`);

}

journey(["1500", "summer"])