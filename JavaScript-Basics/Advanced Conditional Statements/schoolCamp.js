function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);
    let price = 0;
    let sport = "";
    let pricePerNight = 0;

    switch (season) {
        case "Winter":
            if (groupType === "boys") {
                sport = "Judo";
            } else if (groupType === "girls") {
                sport = "Gymnastics";
            } else if (groupType === "mixed") {
                sport = "Ski";
            }

            if (groupType === "boys" || groupType === "girls") {
                pricePerNight = 9.60;
                price = students * pricePerNight * nights;
            } else if (groupType === "mixed") {
                pricePerNight = 10;
                price = students * pricePerNight * nights;
            }


            break;



        case "Spring":
            if (groupType === "boys") {
                sport = "Tennis";
            } else if (groupType === "girls") {
                sport = "Athletics";
            } else if (groupType === "mixed") {
                sport = "Cycling";
            }

            if (groupType === "boys" || groupType === "girls") {
                pricePerNight = 7.20;
                price = students * pricePerNight * nights;
            } else if (groupType === "mixed") {
                pricePerNight = 9.50;
                price = students * pricePerNight * nights;
            }


            break;

        case "Summer":
            if (groupType === "boys") {
                sport = "Football";
            } else if (groupType === "girls") {
                sport = "Volleyball";
            } else if (groupType === "mixed") {
                sport = "Swimming";
            }

            if (groupType === "boys" || groupType === "girls") {
                pricePerNight = 15;
                price = students * pricePerNight * nights;
            } else if (groupType === "mixed") {
                pricePerNight = 20;
                price = students * pricePerNight * nights;
            }

            break;


    }

    if (students >= 50) {
        price = price * 0.50;
    } else if (students >= 20 && students < 50) {
        price = price * 0.85;
    } else if (students >= 10 && students < 20) {
        price = price * 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`)
}

schoolCamp(["Summer",
    "boys",
    "60",
    "7"
])