function addBags(input) {
    let priceOver20Kg = Number(input[0]);
    let luggageWeight = Number(input[1]);
    let daysUntilTrip = Number(input[2]);
    let numOfLuggage = Number(input[3]);
    let luggagePrice = 0;

    if (luggageWeight < 10) {
        luggagePrice = priceOver20Kg * 0.20;

    } else if (luggageWeight >= 10 && luggageWeight <= 20) {
        luggagePrice = priceOver20Kg * 0.50;

    } else if (luggageWeight > 20) {
        luggagePrice = priceOver20Kg;
    }

    if (daysUntilTrip > 30) {
        luggagePrice += luggagePrice * 0.10;
    } else if (daysUntilTrip >= 7 && daysUntilTrip <= 30) {
        luggagePrice += luggagePrice * 0.15;
    } else if (daysUntilTrip < 7) {
        luggagePrice += luggagePrice * 0.40;
    }

    let total = luggagePrice * numOfLuggage;
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}
addBags(["25.50",
    "5",
    "36",
    "6"])
