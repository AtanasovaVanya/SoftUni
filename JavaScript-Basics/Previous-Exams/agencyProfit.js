function agencyProfit(input) {
    let airline = input[0];
    let adultTicket = Number(input[1]);
    let childrenTicket = Number(input[2]);
    let netPriceAdult = Number(input[3]);
    let serviceTax = Number(input[4]);

    let netPriceKids = netPriceAdult - (netPriceAdult * 0.70);
    let adultTicketServicePrice = netPriceAdult + serviceTax;
    let childTicketServicePrice = netPriceKids + serviceTax;
    let total = (childTicketServicePrice * childrenTicket) + (adultTicket * adultTicketServicePrice);
    let profit = total * 0.20;
    console.log(`The profit of your agency from ${airline} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
