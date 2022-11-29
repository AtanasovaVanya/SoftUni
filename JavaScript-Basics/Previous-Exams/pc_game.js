function pcGame(input) {
    let numberOfSoldGames = Number(input[0]);

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i < input.length; i++) {
        let currentGame = input[i];

        switch (currentGame) {
            case 'Hearthstone':
                hearthstone++;
                break;
            case 'Fornite':
                fornite++;
                break;
            case 'Overwatch':
                overwatch++;
                break;
            default:
                others++;
                break;
        }
    }

    console.log(`Hearthstone - ${((hearthstone / numberOfSoldGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / numberOfSoldGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / numberOfSoldGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / numberOfSoldGames) * 100).toFixed(2)}%`);

}


pcGame(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])

// pcGame(["3",
//     "Hearthstone",
//     "Diablo 2",
//     "Star Craft 2"])

