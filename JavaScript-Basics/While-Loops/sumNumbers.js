function sumNumbers(input) {
    let num1 = Number(input[0]);
    let index = 1;
    let total = 0;

    while (index < input.length) {
        if (total >= num1) {
            break;
        }
        total += Number(input[index]);
        index++;
    }

    console.log(total);
}

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
