function puppyCare(input) {
    let foodKg = Number(input[0]);
    let foodInGrams = foodKg * 1000;
    let index = 1;
    let command = input[index];
    let totalGrams = 0;

    while (command !== "Adopted") {
        let gramsPerServing = Number(command);
        totalGrams += gramsPerServing;

        index++;
        command = input[index];
    }

    let food = foodInGrams - totalGrams;
    if (totalGrams <= foodInGrams) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }

}

puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])

