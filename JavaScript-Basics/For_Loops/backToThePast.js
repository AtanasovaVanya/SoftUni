function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let year = Number(input[1]);

    let moneyLeft = inheritedMoney;
    let ivanAge = 17;
    let spendMoney = 0;

    for (let i = 1800; i <= year; i++) {
        let currentYear = i;
        ivanAge++;
        // console.log(currentYear, ivanAge);
        if (i % 2 == 0) {
            moneyLeft -= 12000;
        } else {
            spendMoney = 12000 + (ivanAge * 50);
            moneyLeft -= spendMoney;
        }
    }

    if (moneyLeft > 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneyLeft * -1).toFixed(2)} dollars to survive.`);
    }

}

backToThePast(["100000.15",
    "1808"
])
