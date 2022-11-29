function minNumber(input) {
    let inputElement = Number(input[0]);
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num < min) {
            min = num;
        }
        inputElement = input[index];
        index++;
    }

    console.log(min);
}

minNumber(["-10",
    "20",
    "-30",
    "Stop"])
