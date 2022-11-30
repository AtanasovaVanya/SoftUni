function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {

        let printLine = '';

        for (let j = 1; j <= i; j++) {
            printLine += `${i} `;
        }
        console.log(printLine);
    }
}
triangleOfNumbers(3);