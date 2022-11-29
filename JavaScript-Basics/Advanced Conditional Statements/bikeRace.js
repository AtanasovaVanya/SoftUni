function bikeRace(input) {
    let juniorsNum = Number(input[0]);
    let seniorsNum = Number(input[1]);
    let pathType = input[2];
    let total = 0;
    let cost = 0;
    let totalPeople = juniorsNum + seniorsNum;


    switch (pathType) {
        case "trail":
            total = (juniorsNum * 5.50) + (seniorsNum * 7);
            cost = total * 0.95;
            break;

        case "cross-country":

            total = (juniorsNum * 8) + (seniorsNum * 9.50);
            if (totalPeople >= 50) {
                let costSpecial = total * 0.75;
                cost = costSpecial * 0.95;

            } else {
                cost = total * 0.95;
            }
            break;

        case "downhill":
            total = (juniorsNum * 12.25) + (seniorsNum * 13.75);
            cost = total * 0.95;

            break;

        case "road":
            total = (juniorsNum * 20) + (seniorsNum * 21.50);
            cost = total * 0.95;

            break;

    }

    console.log(`${cost.toFixed(2)}`);

}

bikeRace(["3",
    "40",
    "road"
])