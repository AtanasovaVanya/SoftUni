function aluminumJoinery(input) {
    let numOfJoinery = Number(input[0]);
    let type = input[1];
    let deliveryOptions = input[2];
    let singlePrice = 0;

    switch (type) {
        case "90X130":
            singlePrice = 110 * numOfJoinery;
            if (numOfJoinery > 30 && numOfJoinery < 60) {
                singlePrice -= singlePrice * 0.05;
            } else if (numOfJoinery > 60) {
                singlePrice -= singlePrice * 0.08;
            }
            break;

        case "100X150":
            singlePrice = 140 * numOfJoinery;
            if (numOfJoinery > 40 && numOfJoinery < 80) {
                singlePrice -= singlePrice * 0.06;
            } else if (numOfJoinery > 80) {
                singlePrice -= singlePrice * 0.10;
            }
            break;

        case "130X180":
            singlePrice = 190 * numOfJoinery;
            if (numOfJoinery > 20 && numOfJoinery < 50) {
                singlePrice -= singlePrice * 0.07;
            } else if (numOfJoinery > 50) {
                singlePrice -= singlePrice * 0.12;
            }
            break;

        case "200X300":
            singlePrice = 250 * numOfJoinery;
            if (numOfJoinery > 25 && numOfJoinery < 50) {
                singlePrice -= singlePrice * 0.09;
            } else if (numOfJoinery > 50) {
                singlePrice -= singlePrice * 0.14;
            }
            break;
    }

    if (deliveryOptions === "With delivery") {
        singlePrice += 60;
    } else {
        singlePrice = singlePrice;
    }

    if (numOfJoinery > 99) {
        singlePrice -= singlePrice * 0.04;
        console.log(`${singlePrice.toFixed(2)} BGN`)

    } else if (numOfJoinery >= 10 && numOfJoinery <= 99) {
        console.log(`${singlePrice.toFixed(2)} BGN`)
    } else if (numOfJoinery < 10) {
        console.log("Invalid order");
    }
}
aluminumJoinery(["40",
    "90X130",
    "Without delivery"])



