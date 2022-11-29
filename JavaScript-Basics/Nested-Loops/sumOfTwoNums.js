function sumOf2Numbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let result = 0;
    let flag = false;

    let combsCounter = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combsCounter++;
            result = i + j;
            if (result === magicNum) {
                flag = true;
                console.log(`Combination N:${combsCounter} (${i} + ${j} = ${magicNum})`);
                break;
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (result !== magicNum) {
        console.log(`${combsCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOf2Numbers(["88",
    "888",
    "2000"])