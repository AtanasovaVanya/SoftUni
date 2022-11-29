function easterBake(input) {
    let easterBread = Number(input[0]);
    let index = 1;
    let sugar = 0;
    let flour = 0;
    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= easterBread; i++) {
        sugar = Number(input[index++]);
        flour = Number(input[index++]);
        totalSugar += sugar;
        totalFlour += flour;

        if (flour > maxFlour) {
            maxFlour = flour;
        }

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
    }
    let sugarPackages = Math.ceil(totalSugar / 950);
    let flourPackages = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPackages}`);
    console.log(`Flour: ${flourPackages}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"])
