function challenge(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxTables = Number(input[2]);
    let tablesCounter = maxTables;
    let result = "";

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {

            if (tablesCounter === 0) {
                break;
            }
            result += `(${i} <-> ${j})` + " ";

            tablesCounter--;
        }
    }
    console.log(result);
}
challenge(["5",
    "8",
    "40"
])