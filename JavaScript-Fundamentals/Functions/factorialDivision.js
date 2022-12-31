function factorialDivision(num1, num2) {

    console.log((factorialize(num1) / factorialize(num2)).toFixed(2));

    function factorialize(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        for (let i = num - 1; i >= 1; i--) {
            num *= i
        }
        return num;
    }
}
factorialDivision(6, 2);