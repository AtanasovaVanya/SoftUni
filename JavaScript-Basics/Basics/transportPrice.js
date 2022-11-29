function transportPrice(input) {
    let kilometers = Number(input[0]);
    let preference = input[1];

    if (kilometers >= 100) {
        let trainCost = kilometers * 0.06;
        console.log(`The lowest price for your trip is: ${trainCost.toFixed(2)} lv by train.`);
    } else if (kilometers >= 20) {
        let busCost = kilometers * 0.09;
        console.log(`The lowest price for your trip is: ${busCost.toFixed(2)} lv by bus.`);
    } else if (kilometers < 20 && preference === "day") {
        let dayTaxiCost = 0.70 + (kilometers * 0.79);
        console.log(`The lowest price for your trip is: ${dayTaxiCost.toFixed(2)} lv by taxi.`);
    } else if (kilometers < 20 && preference === "night") {
        let nightTaxiCost = 0.70 + (kilometers * 0.90);
        console.log(`The lowest price for your trip is: ${nightTaxiCost.toFixed(2)} lv by taxi.`);
    }
}

transportPrice(["7",
    "night"
])