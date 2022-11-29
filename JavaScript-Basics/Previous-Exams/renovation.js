function renovation(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let notPaintedPercentage = Number(input[2]);

    let index = 3;
    let command = input[index];

    let totalArea = height * width * 4;
    let wallsToPaint = Math.ceil(totalArea - (totalArea * (notPaintedPercentage / 100)));

    while (command !== "Tired!") {
        let litersPaint = Number(command);
        wallsToPaint -= litersPaint;

        if (wallsToPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(wallsToPaint)} l paint left!`);
            break;
        }

        if (wallsToPaint == 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Tired!") {
        console.log(`${wallsToPaint} quadratic m left.`);
    }

}

renovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"
])

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])
