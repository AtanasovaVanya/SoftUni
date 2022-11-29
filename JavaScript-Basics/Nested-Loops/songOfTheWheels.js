function wheelsSong(input) {
    let controlValue = Number(input[0]);
    let counter = 0;
    let result = "";
    let pass1 = 0;
    let pass2 = 0;
    let pass3 = 0;
    let pass4 = 0;
    let password = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if ((a * b + c * d === controlValue) && (a < b && c > d)) {
                        result += `${a}${b}${c}${d}` + " ";
                        counter++;

                        if (counter === 4) {
                            pass1 = a;
                            pass2 = b;
                            pass3 = c;
                            pass4 = d;
                            password = `${pass1}${pass2}${pass3}${pass4}`;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
    if (counter >= 4) {
        console.log(`Password: ${password}`);
    }
    if (counter <= 4) {
        console.log("No!");
    }
}

wheelsSong(["110"]);