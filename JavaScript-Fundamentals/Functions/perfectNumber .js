function perfectNumber(num) {

    let currentNum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            currentNum += i;
        }
    }
    let result = (currentNum === num && currentNum !== 0) ? 'We have a perfect number!' : "It's not so perfect.";
    console.log(result);
}
perfectNumber(28);