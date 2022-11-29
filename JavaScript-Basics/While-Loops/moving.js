function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let flatSize = width * length * height;
    let index = 3;
    let command = input[index];
    let totalBoxes = 0;

    while (command !== "Done") {
        let boxNumber = Number(command);
        totalBoxes += boxNumber;

        if (totalBoxes > flatSize) {
            console.log(`No more free space! You need ${totalBoxes - flatSize} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "Done") {
        console.log(`${flatSize - totalBoxes} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
