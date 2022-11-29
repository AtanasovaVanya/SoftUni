function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let perNightPrice = Number(input[2]);
    let extraPercentage = Number(input[3]);

    if (nights > 7) {
        perNightPrice = perNightPrice - (perNightPrice * 0.05);
    }

    let totalPrice = nights * perNightPrice;
    let extraMoney = budget * (extraPercentage / 100);
    let totalNeeded = totalPrice + extraMoney;


    if (totalNeeded <= budget) {
        let money = budget - totalNeeded;
        console.log(`Ivanovi will be left with ${money.toFixed(2)} leva after vacation.`);
    } else {
        let money = Math.abs(budget - totalNeeded);
        console.log(`${money.toFixed(2)} leva needed.`);
    }
}
familyTrip((["800.50",
    "8",
    "100",
    "2"])
)