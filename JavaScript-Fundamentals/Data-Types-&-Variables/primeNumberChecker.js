function primeNumberChecker(number) {
    let isPrime = true;

    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                console.log('false');
                break;
            } else {
                isPrime = true;
                console.log('true');
                break;
            }
        }
    }
}
primeNumberChecker(8);