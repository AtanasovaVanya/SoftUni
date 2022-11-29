function examPreparation(input) {
    let badGrades = Number(input[0]);
    let numBadGrades = 0;
    let numGoodGrades = 0;
    let sum = 0;
    let gradeCount = 0;
    let lastTask = "";
    let index = 1;

    while (input[index] !== "Enough") {
        let currentGrade = Number(input[index + 1]);
        sum += currentGrade;
        gradeCount++;
        lastTask = input[index];


        if (currentGrade <= 4) {
            numBadGrades++;
            if (numBadGrades === badGrades) {
                console.log(`You need a break, ${numBadGrades} poor grades.`);
                break;
            }
        } else {
            numGoodGrades++;
        }
        index += 2;
    }

    if (input[index] === "Enough") {
        let avg = sum / gradeCount;
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastTask}`);
    }

}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
