function basketballTournament(input) {
    let index = 0;
    let command = input[index++];
    let gamesCounter = 0;
    let totalGames = 0;
    let wins = 0;
    let loses = 0;

    while (command !== "End of tournaments") {
        let currentTournament = command;
        let games = Number(input[index++]);

        for (let i = 1; i <= games; i++) {
            let dessysTeam = Number(input[index++]);
            let oppositeTeam = Number(input[index++]);
            gamesCounter++;
            totalGames++;
            if (dessysTeam > oppositeTeam) {
                wins++;
                console.log(`Game ${i} of tournament ${currentTournament}: win with ${(dessysTeam - oppositeTeam)} points.`);
            } else if (oppositeTeam > dessysTeam) {
                loses++;
                console.log(`Game ${i} of tournament ${currentTournament}: lost with ${(oppositeTeam - dessysTeam)} points.`);
            }
            if (gamesCounter === games) {
                break;
            }
        }
        gamesCounter = 0;
        command = input[index++];
    }

    console.log(`${((wins / totalGames) * 100).toFixed(2)}% matches win`);
    console.log(`${((loses / totalGames) * 100).toFixed(2)}% matches lost`);
}
basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
