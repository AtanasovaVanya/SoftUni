function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                let strK = String.fromCharCode(k);
                for (let m = 97; m < 97 + l; m++) {
                    let strM = String.fromCharCode(m);
                    for (let num5 = Math.max(i, j) + 1; num5 <= n; num5++) {
                        result += `${i}${j}${strK}${strM}${num5}` + " ";
                    }
                }
            }
        }
    }
    console.log(result);
}
passwordGenerator(["3",
    "1"]);