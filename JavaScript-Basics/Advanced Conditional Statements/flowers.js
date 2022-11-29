function flowers(input) {
    let chrysanthemum = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let priceBouquet = 0;


    switch (season) {
        case "Spring":
            if (tulips > 7) {
                priceBouquet = (chrysanthemum * 2.00) + (roses * 4.10) + (tulips * 2.50);
                priceBouquet = priceBouquet * 0.95;
            } else {
                priceBouquet = (chrysanthemum * 2.00) + (roses * 4.10) + (tulips * 2.50);
            }
            break;

        case "Summer":
            priceBouquet = (chrysanthemum * 2.00) + (roses * 4.10) + (tulips * 2.50);

            break;

        case "Autumn":

            priceBouquet = (chrysanthemum * 3.75) + (roses * 4.50) + (tulips * 4.15);

            break;

        case "Winter":
            priceBouquet = (chrysanthemum * 3.75) + (roses * 4.50) + (tulips * 4.15);
            if (roses >= 10) {
                priceBouquet = priceBouquet * 0.90;
            } else {
                priceBouquet;
            }

            break;
    }

    if (isHoliday == "Y") {
        priceBouquet = priceBouquet + (priceBouquet * 0.15);
    } else {
        priceBouquet;
    }


    let totalFlowers = chrysanthemum + roses + tulips;

    if (totalFlowers > 20) {
        priceBouquet = priceBouquet * 0.80;
    }

    priceBouquet += 2;

    console.log(`${priceBouquet.toFixed(2)}`);

}

flowers(["3",
    "10",
    "9",
    "Winter",
    "N"
])

// flowers(["2",
//     "4",
//     "8",
//     "Spring",
//     "Y"
// ])

// flowers(["10",
//     "10",
//     "10",
//     "Autumn",
//     "N"
// ])