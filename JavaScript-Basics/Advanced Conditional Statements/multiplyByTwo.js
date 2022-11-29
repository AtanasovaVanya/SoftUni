function multiply(input) {
    let number = 0;

    for (let i = 0; i < input.length; i++) {
        number = Number(input[i]);
        number *= 2;
        if (number >= 0) {
            console.log(`Result: ${number.toFixed(2)}`);
        } else {
            console.log("Negative number!");
        }


    }
}



multiply([23.43,
    12.3245,
    0,
    65.23432,
    23,
    65,
    -12

]);

