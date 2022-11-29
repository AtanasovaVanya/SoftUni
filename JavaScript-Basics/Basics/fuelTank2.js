function fuelTank2(input) {
    let type = input[0];
    let liters = Number(input[1]);
    let haveClubCard = input[2];
    let final = 0;


    if (type === 'Gasoline') {
        final = liters * 2.22;
        if (haveClubCard === "Yes") {
            final -= liters * 0.18;
        }

    } else if (type === 'Diesel') {
        final = liters * 2.33;
        if (haveClubCard === "Yes") {
            final -= liters * 0.12;
        }

    } else if (type === 'Gas') {
        final = liters * 0.93;
        if (haveClubCard === "Yes") {
            final -= liters * 0.08;
        }
    }

    if (liters > 25) {
        final *= 0.90;
        console.log(`${final.toFixed(2)} lv.`);
    } else if (liters >= 20 && liters <= 25) {
        final *= 0.92;
        console.log(`${final.toFixed(2)} lv.`);
    } else {
        console.log(`${final.toFixed(2)} lv.`);
    }
}

fuelTank2(["Gasoline",
    25,
    "No"
])