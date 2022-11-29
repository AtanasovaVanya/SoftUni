function series(input) {
    let budget = Number(input[0]);
    let tvShows = Number(input[1]);
    let total = 0;

    for (let i = 2; i < input.length; i++) {
        let currentTvShow = input[i];
        i++;
        let currentPrice = Number(input[i]);

        switch (currentTvShow) {
            case "Thrones":
                currentPrice *= 0.50;
                total += currentPrice;
                break;
            case "Lucifer":
                currentPrice *= 0.60;
                total += currentPrice;
                break;
            case "Protector":
                currentPrice *= 0.70;
                total += currentPrice;
                break;
            case "TotalDrama":
                currentPrice *= 0.80;
                total += currentPrice;
                break;
            case "Area":
                currentPrice *= 0.90;
                total += currentPrice;
                break;

            default:
                currentPrice = currentPrice;
                total += currentPrice;
                break;
        }
    }
    if (budget >= total) {
        console.log(`You bought all the series and left with ${(budget - total).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(total - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"])


