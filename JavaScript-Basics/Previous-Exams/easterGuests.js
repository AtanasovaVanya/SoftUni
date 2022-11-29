function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadNum = Math.ceil(guests / 3);
    let eggsNum = guests * 2;
    let easterBreadPrice = easterBreadNum * 4;
    let eggsPrice = eggsNum * 0.45;
    let total = easterBreadPrice + eggsPrice;

    if (total <= budget) {
        console.log(`Lyubo bought ${easterBreadNum} Easter bread and ${eggsNum} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`);
    }

}
easterGuests(["9",
    "12"])

