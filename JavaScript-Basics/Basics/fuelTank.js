function fuelTank(input) {
    let type = input[0];
    let liters = Number(input[1]);

    if (type === "Diesel" || type === "Gasoline" || type === "Gas") {
        if (liters >= 25) {
            console.log(`You have enough ${type.toLowerCase()}.`);
        } else if (liters < 25) {
            console.log(`Fill your tank with ${type.toLowerCase()}!`);
        }
    } else if (type !== "Diesel" || type !== "Gasoline" || type !== "Gas") {
        console.log("Invalid fuel!");
    }

}



fuelTank(["Kerosene",
    10])