function divisibleBy9(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let totalSum = 0;
    let numbers = "";

    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 == 0) {
            totalSum += i;
            numbers += (i + "\n ")

        }
    }
    console.log(`The sum: ${totalSum}`);
    console.log(numbers);


}

divisibleBy9(["100", "200"])