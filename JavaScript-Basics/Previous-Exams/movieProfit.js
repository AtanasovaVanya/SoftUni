function movieProfit(input) {
    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let ticketsPerDay = ticketPrice * tickets;
    let allProfit = ticketsPerDay * days;
    let percentForCinema = allProfit * percent / 100;
    let profit = allProfit - percentForCinema;

    console.log(`The profit from the movie ${movie} is ${profit.toFixed(2)} lv.`);

}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])
