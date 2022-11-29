function footballTournament(input) {
    let footballTeamName = input[0];
    let playedGames = Number(input[1]);

    let winner = 0;
    let noWin = 0;
    let lost = 0;
    let winPoints = 0;
    let equalPoints = 0;
    let lostPoints = 0;


    for (let i = 2; i < input.length; i++) {
        let currentGame = input[i];

        switch (currentGame) {
            case "W":
                winner++;
                winPoints = winner * 3;
                break;

            case "D":
                noWin++;
                equalPoints = noWin * 1
                break;

            case "L":
                lost++;
                break;
        }
    }

    let totalPoints = winPoints + equalPoints + lostPoints;

    if (playedGames == 0) {
        console.log(`${footballTeamName} hasn't played any games during this season.`);
    } else {
        console.log(`${footballTeamName} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winner}`);
        console.log(`## D: ${noWin}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${((winner / playedGames) * 100).toFixed(2)}% `);
    }
}
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])


