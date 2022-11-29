function oscars(input) {
    let actorsName = input[0];
    let academyPoints = Number(input[1]);
    let numJury = Number(input[2]);

    let juryPoints = 0;
    let juryNamePoints = 0;

    let totalPoints = academyPoints;

    for (let i = 3; i < input.length; i += 2) {
        let juryName = input[i];
        juryNamePoints = Number(juryName.length);
        juryPoints = Number(input[i + 1]);

        totalPoints += ((juryNamePoints * juryPoints) / 2);

        if (totalPoints > 1250.5) {
            break;
        }

    }

    let diff = Math.abs(1250.5 - totalPoints);
    if (totalPoints < 1250.5) {
        console.log(`Sorry, ${actorsName} you need ${diff.toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    }

}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
