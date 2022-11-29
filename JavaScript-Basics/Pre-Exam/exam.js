function exam(input) {
    let students = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let total = 0;

    for (let i = 1; i <= students; i++) {
        let currentGrade = Number(input[i]);
        total += currentGrade;

        if (currentGrade >= 5) {
            group1++;
        } else if (currentGrade >= 4.00 && currentGrade <= 4.99) {
            group2++;
        } else if (currentGrade >= 3.00 && currentGrade <= 3.99) {
            group3++;
        } else if (currentGrade < 3.00) {
            group4++;
        }
    }


    let avg = total / students;
    console.log(`Top students: ${((group1 / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((group2 / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((group3 / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((group4 / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);

}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
