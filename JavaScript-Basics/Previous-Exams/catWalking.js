function catWalking(input) {
    let minWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalMin = minWalk * walksPerDay;
    let totalCaloriesBurn = totalMin * 5;
    let percentCalories = caloriesPerDay * 0.50;

    if (percentCalories <= totalCaloriesBurn) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurn}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurn}.`)
    }

}
catWalking(["15",
    "2",
    "500"])

