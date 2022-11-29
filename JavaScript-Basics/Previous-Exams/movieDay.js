function movieDay(input) {
    let time = Number(input[0]);
    let scenes = Number(input[1]);
    let timePerScene = Number(input[2]);

    let preparation = time * 0.15;
    let timeFilming = scenes * timePerScene;
    let timeNeeded = preparation + timeFilming;

    if (time <= timeNeeded) {
        console.log(`Time is up! To complete the movie you need ${Math.round(timeNeeded - time)} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time - timeNeeded)} minutes left!`);
    }
}
movieDay(["120",
    "10",
    "11"])
