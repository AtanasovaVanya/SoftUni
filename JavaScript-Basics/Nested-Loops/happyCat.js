function happyCat(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sumPerDay = 0;
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                sumPerDay += 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                sumPerDay += 1.25;
            } else {
                sumPerDay += 1;
            }
        }

        totalSum += sumPerDay;
        console.log(`Day: ${i} - ${sumPerDay.toFixed(2)} leva`);
        sumPerDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCat(["5",
    "2"])