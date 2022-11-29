function harvest(input) {
    let vineyard = Number(input[0]);
    let grapes = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = vineyard * grapes;
    let totalWine = (totalGrapes * 0.40) / 2.5;
    let liters = Math.abs(totalWine - wineNeeded);
    let literPerPerson = liters / workers;

    if (totalWine >= wineNeeded) {
        console.log(`Good harvest this year! Total wine: ${totalWine} liters.`);
        console.log(`${Math.ceil(liters)} liters left -> ${Math.ceil(literPerPerson)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(liters)} liters wine needed.`);
    }
}
harvest([1020,
    1.5,
    425,
    4
])