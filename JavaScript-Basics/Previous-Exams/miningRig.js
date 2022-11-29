function miningRig(input) {
    let videoCardPrice = Number(input[0]);
    let adapter = Number(input[1]);
    let electricityPerDay = Number(input[2]);
    let profitSingleCard = Number(input[3]);

    let totalCardPrice = videoCardPrice * 13;
    let totalAdapterPrice = adapter * 13;
    let total = totalCardPrice + totalAdapterPrice + 1000;
    let profitPerDay = profitSingleCard - electricityPerDay;
    let totalProfitPerDay = 13 * profitPerDay;
    let returnDays = total / totalProfitPerDay;

    console.log(Math.ceil(total));
    console.log(Math.ceil(returnDays));
}

miningRig(["700",
    "15",
    "0.20",
    "2"])
