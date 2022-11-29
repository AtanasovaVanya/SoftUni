function fitnessCentre(input) {
    let visitors = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let training = 0;
    let purchase = 0;

    for (let i = 1; i <= visitors; i++) {
        let type = input[i];

        switch (type) {
            case "Back":
                back++;
                training++;
                break;

            case "Chest":
                chest++;
                training++;
                break;

            case "Legs":
                legs++;
                training++;
                break;

            case "Abs":
                abs++;
                training++;
                break;

            case "Protein shake":
                proteinShake++;
                purchase++;
                break;

            case "Protein bar":
                proteinBar++;
                purchase++;
                break;
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${((training * 100) / visitors).toFixed(2)}% - work out`);
    console.log(`${((purchase * 100) / visitors).toFixed(2)}% - protein`);
}
fitnessCentre(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])

