function fitnessCard(input) {
    let sum = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let gymCardPrice = 0;

    switch (sport) {
        case "Gym":
            if (sex === "m") {
                gymCardPrice += 42;
            } else if (sex === "f") {
                gymCardPrice += 35;
            }
            break;

        case "Boxing":
            if (sex === "m") {
                gymCardPrice += 41;
            } else if (sex === "f") {
                gymCardPrice += 37;
            }
            break;

        case "Yoga":
            if (sex === "m") {
                gymCardPrice += 45;
            } else if (sex === "f") {
                gymCardPrice += 42;
            }
            break;

        case "Zumba":
            if (sex === "m") {
                gymCardPrice += 34;
            } else if (sex === "f") {
                gymCardPrice += 31;
            }
            break;

        case "Dances":
            if (sex === "m") {
                gymCardPrice += 51;
            } else if (sex === "f") {
                gymCardPrice += 53;
            }
            break;

        case "Pilates":
            if (sex === "m") {
                gymCardPrice += 39;
            } else if (sex === "f") {
                gymCardPrice += 37;
            }
            break;
    }

    if (age <= 19) {
        gymCardPrice = gymCardPrice - (gymCardPrice * 0.20);
    }

    if (gymCardPrice <= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${Math.abs(gymCardPrice - sum).toFixed(2)} more.`);
    }
}
fitnessCard(["10",
    "m",
    "50",
    "Pilates"])


