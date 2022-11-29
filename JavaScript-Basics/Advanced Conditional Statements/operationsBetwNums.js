function operations(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0.0;
    let num = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                num = "even";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            } else {
                num = "odd";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            }
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                num = "even";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            } else {
                num = "odd";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            }
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                num = "even";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            } else {
                num = "odd";
                console.log(`${num1} ${operator} ${num2} = ${result} - ${num}`);
            }
            break;

        case "/":
            result = num1 / num2;

            if (num1 === 0) {
                console.log(`Cannot divide ${num2} by zero`);
            } else if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} / ${num2} = ${result.toFixed(2)} `);
            }

            break;

        case "%":
            result = num1 % num2;

            if (num1 === 0) {
                console.log(`Cannot divide ${num2} by zero`);
            } else if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} % ${num2} = ${result}`);
            }
            break;
    }
}

operations(["112",
    "0",
    "/"])


// operations(["10",
//     "1",
//     "-"])

// operations(["10",
//     "3",
//     "%"])
// operations(["123",
//     "12",
//     "/"])
// operations(["10",
//     "0",
//     "%"])





