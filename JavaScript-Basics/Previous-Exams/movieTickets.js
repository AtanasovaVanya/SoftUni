function movieTickets(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let number3 = Number(input[2]);

    for (let i = number1; i <= number2 - 1; i++) {
        if (i % 2 !== 0) {
            let symbol1 = String.fromCharCode(i);
            for (let j = 1; j <= number3 - 1; j++) {
                for (let k = 1; k <= (number3 / 2) - 1; k++) {
                    let l = symbol1.codePointAt(0);
                    if ((j + k + l) % 2 !== 0) {
                        console.log(`${symbol1}-${j}${k}${l}`);
                    }
                }
            }
        }
    }
}
movieTickets(["69",
    "72",
    "4 "])


