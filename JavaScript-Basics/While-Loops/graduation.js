function graduation(input) {
    let name = input[0];
    let yearGrade = 0;
    let sum = 0;
    let excluded = 0;
    let index = 0;

    while (yearGrade < 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4) {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${yearGrade} grade`);
                break;
            }
        }
        sum += grade;
        yearGrade++;
    }
    if (yearGrade >= 12) {
        let avg = sum / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }

}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
