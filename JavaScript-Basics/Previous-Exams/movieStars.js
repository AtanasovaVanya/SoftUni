function movieStars(input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];

    while (command !== "ACTION") {
        let currentActor = command;
        if (currentActor.length > 15) {
            budget *= 0.80;
        } else if (currentActor.length <= 15) {
            index++;
            let remuneration = Number(input[index]);
            budget -= remuneration;
        }
        if (budget <= 0) {
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "ACTION") {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
}
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])


