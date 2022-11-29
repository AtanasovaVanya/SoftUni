function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let evaluation = input[2];
    let nights = days - 1;
    let price = 0;


    switch (type) {
        case "room for one person":
            price = nights * 18.00;
            break;

        case "apartment":
            price = nights * 25.00;
            if (days < 10) {
                price = price * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else if (days > 15) {
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = nights * 35.00;
            if (days < 10) {
                price = price * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else if (days > 15) {
                price = price * 0.80;
            }
            break;
    }

    if (evaluation == "positive") {
        price = (price * 0.25) + price;
    } else if (evaluation == "negative") {
        price = price - (price * 0.10);
    }

    console.log(price.toFixed(2));
}
skiTrip(["14",
    "apartment",
    "positive"])




