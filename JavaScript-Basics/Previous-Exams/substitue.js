function substitute(input) {
    let kNum = Number(input[0]);
    let lNum = Number(input[1]);
    let mNum = Number(input[2]);
    let nNum = Number(input[3]);
    let firstNum = "";
    let secondNum = "";
    let counter = 0;

    for (let i = kNum; i <= 8; i++) {
        for (let j = 9; j >= lNum; j--) {
            for (let k = mNum; k <= 8; k++) {
                for (let l = 9; l >= nNum; l--) {
                    let validCombo = i % 2 === 0 &&
                        j % 2 !== 0 &&
                        k % 2 === 0 &&
                        l % 2 !== 0;
                    firstNum = (i * 10) + j;
                    secondNum = (k * 10) + l;

                    if (validCombo && firstNum === secondNum) {
                        console.log("Cannot change the same player.");
                    } else if (validCombo && firstNum !== secondNum) {
                        console.log(`${firstNum} - ${secondNum}`);
                        counter++;
                    }

                    if (counter >= 6) {
                        return;
                    }
                }
            }
        }
    }
}
substitute(["7",
    "6",
    "8",
    "5"])