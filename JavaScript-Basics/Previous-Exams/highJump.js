function highJump(input) {
    let goalJump = Number(input[0]);
    let index = 1;
    let jumpsCounter = 0;
    let attempts = 0;

    let barStart = goalJump - 30;

    while (barStart <= goalJump) {
        let currentJump = Number(input[index]);

        if (barStart < currentJump) {
            barStart += 5;
            attempts = 0;
        } else {
            attempts++;
        }

        jumpsCounter++;

        if (attempts === 3) {
            break;
        }
        index++;
    }

    if (attempts === 3) {
        console.log(`Tihomir failed at ${barStart}cm after ${jumpsCounter} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${goalJump}cm after ${jumpsCounter} jumps.`);
    }
}
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])

