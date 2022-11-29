function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let student = 0;
    let standard = 0;
    let kid = 0;
    let totalTicketCounter = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;

        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;

            switch (ticketType) {
                case "student": student++; break;
                case "standard": standard++; break;
                case "kid": kid++; break;
            }

            if (ticketCounter >= freeSeats) {
                break;
            }
            ticketType = input[++index];
        }

        totalTicketCounter += ticketCounter;

        let resultSingleMovie = (ticketCounter / freeSeats) * 100;

        console.log(`${movieName} - ${resultSingleMovie.toFixed(2)}% full.`);
        command = input[++index];

    }
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${(student / totalTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTicketCounter * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
