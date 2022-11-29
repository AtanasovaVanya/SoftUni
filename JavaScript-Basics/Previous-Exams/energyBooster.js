function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let numOfSets = Number(input[2]);
    let price = 0;
    let setsPrice = 0;
    let discount = 0;
    let endPrice = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "big") {
                price += 5 * 28.70;
                setsPrice += numOfSets * price;
            } else if (size === "small") {
                price += 2 * 56.00;
                setsPrice += numOfSets * price;
            }
            break;

        case "Mango":
            if (size === "big") {
                price += 5 * 19.60;
                setsPrice += numOfSets * price;
            } else if (size === "small") {
                price += 2 * 36.66;
                setsPrice += numOfSets * price;
            }
            break;

        case "Pineapple":
            if (size === "big") {
                price += 5 * 24.80;
                setsPrice += numOfSets * price;
            } else if (size === "small") {
                price += 2 * 42.10;
                setsPrice += numOfSets * price;
            }
            break;

        case "Raspberry":
            if (size === "big") {
                price += 5 * 15.20;
                setsPrice += numOfSets * price;
            } else if (size === "small") {
                price += 2 * 20.00;
                setsPrice += numOfSets * price;
            }
            break;
    }

    if (setsPrice >= 400 && setsPrice <= 1000) {
        discount += setsPrice * 0.15;
        endPrice += setsPrice - discount;
        console.log(`${endPrice.toFixed(2)} lv.`);
    } else if (setsPrice > 1000) {
        discount += setsPrice * 0.50;
        endPrice += setsPrice - discount;
        console.log(`${endPrice.toFixed(2)} lv.`);
    } else {
        console.log(`${setsPrice.toFixed(2)} lv.`);
    }


}
energyBooster(["Raspberry",
    "small",
    "50"])







