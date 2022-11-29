function easterCompetition(input) {
    let easterBreads = Number(input[0]);
    let index = 1;
    let command = input[index];
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let winner = "";

    for (let i = index; i <= easterBreads; i++) {
        let points = 0;
        let bakersName = command;
        index++;
        command = input[index];

        while (command !== "Stop") {
            let grade = Number(command);
            points += grade;
            index++;
            command = input[index];
        }

        if (points > maxPoints) {
            maxPoints = points;
            winner = bakersName;
            console.log(`${winner} has ${maxPoints} points.`);
            console.log(`${bakersName} is the new number 1!`);
        } else {
            console.log(`${bakersName} has ${points} points.`)
        }
        index++;
        command = input[index];
    }
    console.log(`${winner} won competition with ${maxPoints} points!`);
}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])


