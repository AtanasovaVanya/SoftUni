function balls(input) {
    let numOfBalls = Number(input[0]);
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let others = 0;

    for (let i = 1; i <= numOfBalls; i++) {
        let currentBall = input[i];
        if (currentBall === "red") {
            points += 5;
            redBalls++;
        } else if (currentBall === "orange") {
            points += 10;
            orangeBalls++;
        } else if (currentBall === "yellow") {
            points += 15;
            yellowBalls++;
        } else if (currentBall === "white") {
            points += 20;
            whiteBalls++;
        } else if (currentBall === "black") {
            points = Math.floor(points / 2);
            blackBalls++;
        }
        else {
            others++;
        }
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${others}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}
balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])

