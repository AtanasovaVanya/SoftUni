function suitcases(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;


    while (command !== "End") {
        let suitcaseVolume = Number(command);

        if ((counter + 1) % 3 == 0) {
            suitcaseVolume += suitcaseVolume * 0.10;
        }

        if (capacity - suitcaseVolume <= 0) {
            break;
        }
        counter++;
        capacity -= suitcaseVolume;

        index++;
        command = input[index];

    }

    if (command === "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}
suitcases(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"])
