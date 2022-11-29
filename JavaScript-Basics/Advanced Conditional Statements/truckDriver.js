function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let salary = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmPerMonth <= 5000) {
                salary = ((kmPerMonth * 0.75) * 4) * 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = ((kmPerMonth * 0.95) * 4) * 0.90;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                salary = ((kmPerMonth * 1.45) * 4) * 0.90;
            }
            break;


        case "Summer":
            if (kmPerMonth <= 5000) {
                salary = ((kmPerMonth * 0.90) * 4) * 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = ((kmPerMonth * 1.10) * 4) * 0.90;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                salary = ((kmPerMonth * 1.45) * 4) * 0.90;
            }
            break;

        case "Winter":
            if (kmPerMonth <= 5000) {
                salary = ((kmPerMonth * 1.05) * 4) * 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                salary = ((kmPerMonth * 1.25) * 4) * 0.90;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                salary = ((kmPerMonth * 1.45) * 4) * 0.90;
            }
            break;
    }
    console.log(`${salary.toFixed(2)}`);

}

truckDriver(["Spring",
    "1600"
])