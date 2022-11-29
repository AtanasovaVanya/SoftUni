function maxNumber(input) {
    let inputElement = Number(input[0]);
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num > max) {
            max = num;
        }
        inputElement = input[index];
        index++;
    }

    console.log(max);
}

maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])
