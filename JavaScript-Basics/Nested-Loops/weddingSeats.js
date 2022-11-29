function weddingSeats(input) {
    let endSector = input[0].charCodeAt();
    let rowsSectorA = Number(input[1]);
    let oddRowSeats = Number(input[2]);
    let seatsCounter = 0;

    for (let sector = 65; sector <= endSector; sector++) {
        for (let rows = 1; rows <= rowsSectorA; rows++) {
            if (rows % 2 !== 0) {
                for (let seats = 97; seats < 97 + oddRowSeats; seats++) {

                    let stringSector = String.fromCharCode(sector);
                    let stringSeats = String.fromCharCode(seats);
                    console.log(`${stringSector}${rows}${stringSeats}`);
                    seatsCounter++;
                }
            } else {
                for (let seats = 97; seats < 97 + oddRowSeats + 2; seats++) {

                    let stringSector = String.fromCharCode(sector);
                    let stringSeats = String.fromCharCode(seats);
                    console.log(`${stringSector}${rows}${stringSeats}`);
                    seatsCounter++;
                }
            }
        }
        rowsSectorA++;
    }
    console.log(seatsCounter);
}
weddingSeats(["B",
    "3",
    "2"
])