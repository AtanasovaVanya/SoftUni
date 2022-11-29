function flowerShop(input) {
    let magnolia = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let total = magnolia * 3.25 + hyacinths * 4 + roses * 3.50 + cactus * 8;
    let afterTax = total - (total * 0.05);
    let money = Math.abs(giftPrice - afterTax);

    if (giftPrice <= afterTax) {
        console.log(`She is left with ${Math.floor(money)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(money)} leva.`);
    }

}

flowerShop([2,
    3,
    5,
    1,
    50
])