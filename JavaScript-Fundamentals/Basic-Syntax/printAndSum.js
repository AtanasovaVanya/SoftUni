function printAndSum(startNum, endNum) {
    let sum = 0;
    let result = "";
    for (let i = startNum; i <= endNum; i++) {
        sum += i;

        if (i === endNum) {
            result += `${i}`;
        } else {
            result += `${i} `;
        }
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);