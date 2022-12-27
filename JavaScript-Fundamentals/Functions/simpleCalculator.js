function simpleCalculator(num1, num2, operator) {
    let multiplication = (num1, num2) => num1 * num2;
    let division = (num1, num2) => num1 / num2;
    let addition = (num1, num2) => num1 + num2;
    let subtraction = (num1, num2) => num1 - num2;

    switch (operator) {
        case "multiply":
            console.log(multiplication(num1, num2));
            break;
        case "divide":
            console.log(division(num1, num2));
            break;
        case "add":
            console.log(addition(num1, num2));
            break;
        case "subtract":
            console.log(subtraction(num1, num2));
            break;
    }


}
simpleCalculator(12,
    19,
    'add'

);