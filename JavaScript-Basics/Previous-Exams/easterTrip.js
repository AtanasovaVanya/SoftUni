function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);
    let nightPrice = 0;

    switch (destination) {
        case "France":
            if (dates === "21-23") {
                nightPrice = 30;
            } else if (dates === "24-27") {
                nightPrice = 35;
            } else if (dates === "28-31") {
                nightPrice = 40;
            }
            break;

        case "Italy":
            if (dates === "21-23") {
                nightPrice = 28;
            } else if (dates === "24-27") {
                nightPrice = 32;
            } else if (dates === "28-31") {
                nightPrice = 39;
            }
            break;

        case "Germany":
            if (dates === "21-23") {
                nightPrice = 32;
            } else if (dates === "24-27") {
                nightPrice = 37;
            } else if (dates === "28-31") {
                nightPrice = 43;
            }
            break;
    }
    let expenses = nights * nightPrice;
    console.log(`Easter trip to ${destination} : ${expenses.toFixed(2)} leva.`);

}
easterTrip(["Italy",
    "21-23",
    "7"])

