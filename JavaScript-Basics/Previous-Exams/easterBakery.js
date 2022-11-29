function easterBakery(input) {
    let flourPriceKg = Number(input[0]);
    let flour = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggs = Number(input[3]);
    let yeastPackages = Number(input[4]);

    let sugarPrice = flourPriceKg * 0.75;
    let eggsPrice = flourPriceKg + (flourPriceKg * 0.10);
    let yeastPackagePrice = sugarPrice * 0.20;
    let flourSum = flourPriceKg * flour;
    let sugarSum = sugarKg * sugarPrice;
    let eggsSum = eggs * eggsPrice;
    let yeastSum = yeastPackagePrice * yeastPackages;
    let total = flourSum + sugarSum + eggsSum + yeastSum;

    console.log(total.toFixed(2));

}
easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"])
