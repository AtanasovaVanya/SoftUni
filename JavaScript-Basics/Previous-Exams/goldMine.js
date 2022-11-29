function goldMine(input) {
    let numLocations = Number(input[0]);
    let expectedGoldPerDay = 0;
    let daysMining = 0;
    let total = 0;
    let perDayGold = 0;
    let avg = 0;


    for (let i = 1; i < input.length; i++) {
        expectedGoldPerDay = Number(input[i]);
        i++;
        daysMining = Number(input[i]);
        for (let j = 1; j <= daysMining; j++) {
            i++;
            perDayGold = Number(input[i]);
            total += perDayGold;
        }
        avg = total / daysMining;

        if (avg >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedGoldPerDay - avg).toFixed(2)} gold.`);
        }

        expectedGoldPerDay = 0;
        daysMining = 0;
        total = 0;
        perDayGold = 0;

    }
}
goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])

