function excursion(input) {
    let numPeople = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let singleNightsSum = nights * 20;
    let singleCard = transportCards * 1.60;
    let singleMuseum = museumTickets * 6;
    let totalSinglePersonSum = singleNightsSum + singleCard + singleMuseum;

    let totalSumGroup = totalSinglePersonSum * numPeople;
    let total = totalSumGroup + (totalSumGroup * 0.25);
    console.log(total.toFixed(2));

}
excursion(["20",
    "14",
    "30",
    "6"])
