function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let numDrinks = Number(input[2]);
    let total = 0;
    let discountPrice = 0;


    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                total = numDrinks * 0.90;
            } else if (sugar === "Normal") {
                total = numDrinks * 1.00;
            } else if (sugar === "Extra") {
                total = numDrinks * 1.20;
            }
            break;


        case "Cappuccino":
            if (sugar === "Without") {
                total = numDrinks * 1.00;
            } else if (sugar === "Normal") {
                total = numDrinks * 1.20;
            } else if (sugar === "Extra") {
                total = numDrinks * 1.60;
            }
            break;

        case "Tea":
            if (sugar === "Without") {
                total = numDrinks * 0.50;
            } else if (sugar === "Normal") {
                total = numDrinks * 0.60;
            } else if (sugar === "Extra") {
                total = numDrinks * 0.70;
            }
            break;

    }


    if (sugar === "Without") {
        total = total * 0.65;
    }

    if (drink === "Espresso" && numDrinks >= 5) {
        total = total * 0.75;
    }

    if (total > 15) {
        total = total - (total * 0.20);
    }

    console.log(`You bought ${numDrinks} cups of ${drink} for ${total.toFixed(2)} lv.`);
}

coffeeMachine(["Tea",
    "Extra",
    "3"])

// coffeeMachine(["Cappuccino",
//     "Normal",
//     "13"]);
