function newHouse(input) {
    let type = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;


    switch (type) {
        case "Roses":
            price = qty * 5.00;
            if (qty > 80) {
                price = (qty * 5.00) * 0.90;
            }
            break;

        case "Dahlias":
            price = qty * 3.80;
            if (qty > 90) {
                price = (qty * 3.80) * 0.85;
            }
            break;

        case "Tulips":
            price = qty * 2.80;
            if (qty > 80) {
                price = (qty * 2.80) * 0.85;
            }
            break;

        case "Narcissus":
            price = qty * 3.00;
            if (qty < 120) {
                price = (qty * 3.00) * 1.15;
            }
            break;

        case "Gladiolus":
            price = qty * 2.50;
            if (qty < 80) {
                price = (qty * 2.50) * 1.20;
            }
            break;

    }

    let money = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${qty} ${type} and ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
    }

}

newHouse(["Tulips",
    "88",
    "260"])




