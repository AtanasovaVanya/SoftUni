function secretDoor(input) {
    let hundredsLimit = Number(input[0]);
    let tensLimit = Number(input[1]);
    let unitsLimit = Number(input[2]);

    let result = "";

    for (let i = 1; i <= hundredsLimit; i++) {
        if (i % 2 === 0) {
            for (let j = 1; j <= tensLimit; j++) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    for (let k = 1; k <= unitsLimit; k++) {
                        if (k % 2 === 0) {
                            result += `${i} ${j} ${k} \n`;
                        }
                    }
                }

            }
        }
    }
    console.log(result);
}
secretDoor(["3",
    "5",
    "5"])