function train(input) {

    let numOfJury = Number(input[0]);
    let index = 1;
    let command = input[index];

    let sumGrades = 0;
    let numberOfPresentations = 0;

    while (command !== "Finish") {
        numberOfPresentations++;

        let name = command;

        let grade = Number(input[index]);
        let tempSumGrade = 0;
        for (let i = 1; i <= numOfJury; i++) {
            index++;
            grade = Number(input[index]);
            tempSumGrade += grade;
        }

        let avgResult = tempSumGrade / numOfJury;
        sumGrades += avgResult;
        console.log(`${name} - ${avgResult.toFixed(2)}.`);

        index++;
        command = input[index];
    }

    console.log(`Student's final assessment is ${(sumGrades / numberOfPresentations).toFixed(2)}.`);
}

train(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
