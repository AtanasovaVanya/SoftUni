function easterLunch(input) {
    let easterBreadNum = Number(input[0]);
    let eggs = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let easterBreadPrice = easterBreadNum * 3.20;
    let eggsPrice = eggs * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let dyiPrice = eggs * 12 * 0.15;
    let total = easterBreadPrice + eggsPrice + cookiesPrice + dyiPrice;
    console.log(total.toFixed(2));

}
easterLunch(["3",
    "2",
    "3"])
