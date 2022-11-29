function passwordGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPasswords = Number(input[2]);
    let result = "";
    let numCombinations = 0;
    let flag = false;


    for (let i = 35; i <= 55; i++) {
        for (let j = 64; j <= 96; j++) {
            for (let k = 1; k <= a; k++) {
                for (let l = 1; l <= b; l++) {
                    numCombinations++;

                    let strA = String.fromCharCode(i);
                    let strB = String.fromCharCode(j);
                    result += `${strA}${strB}${k}${l}${strB}${strA}` + "|";

                    if (numCombinations >= maxPasswords) {
                        flag = true;
                        break;
                    }

                    if (k === a && l === b) {
                        flag = true;
                        break;
                    }

                    i++;
                    if (i > 55) {
                        i = 35;
                    }

                    j++;
                    if (j > 96) {
                        j = 64;
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    console.log(result);
}

passwordGenerator(["2",
    "3",
    "10"
])