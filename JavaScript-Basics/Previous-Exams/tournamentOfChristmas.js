function tournament(input) {
    let daysOfTour = Number(input[0]);

    let moneyCounters = 0;
    let winGames = 0;
    let lostGames = 0;
    let totalMoneyCounter = 0;
    let daysWon = 0;
    let daysLost = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "win") {
            winGames++;
            moneyCounters += 20;
        } else if (input[i] === "lose") {
            lostGames++;
            moneyCounters += 0;
        }

        if (input[i] === "Finish") {
            if (winGames > lostGames) {
                daysWon++;
                moneyCounters = moneyCounters + (moneyCounters * 0.10);
                totalMoneyCounter += moneyCounters;
                moneyCounters = 0;
                winGames = 0;
                lostGames = 0;
            } else {
                daysLost++;
                totalMoneyCounter += moneyCounters;
                moneyCounters = 0;
                winGames = 0;
                lostGames = 0;
            }
        }
    }
    if (daysWon > daysLost) {
        let bonusMoney = totalMoneyCounter + (totalMoneyCounter * 0.20)
        console.log(`You won the tournament! Total raised money: ${bonusMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyCounter.toFixed(2)}`);
    }
}

tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])

