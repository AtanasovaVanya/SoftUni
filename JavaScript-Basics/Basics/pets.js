function pets(input) {
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let dog = days * dogFoodPerDay;
    let cat = days * catFoodPerDay;
    let turtle = days * (turtleFoodPerDay / 1000);
    let total = dog + cat + turtle;
    let food = Math.abs(foodLeft - total);

    if (foodLeft >= total) {
        console.log(`${Math.floor(food)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(food)} more kilos of food are needed.`)
    }
}

pets([2,
    10,
    1,
    1,
    1200
])