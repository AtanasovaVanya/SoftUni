function easterParty(input) {
    let guests = Number(input[0]);
    let singlePersonPrice = Number(input[1]);
    let budget = Number(input[2]);
    let singlePriceAfterDiscount = 0;

    if (guests >= 10 && guests <= 15) {
        singlePriceAfterDiscount = singlePersonPrice * 0.85;
    } else if (guests > 15 && guests <= 20) {
        singlePriceAfterDiscount = singlePersonPrice * 0.80;
    } else if (guests > 20) {
        singlePriceAfterDiscount = singlePersonPrice * 0.75;
    } else {
        singlePriceAfterDiscount = singlePersonPrice;
    }

    let cakePrice = budget * 0.10;
    let total = guests * singlePriceAfterDiscount + cakePrice;

    if (budget < total) {
        console.log(`No party! ${(total - budget).toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${(budget - total).toFixed(2)} leva left.`);
    }
}
easterParty(["8",
    "25",
    "340"])
