function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let batches = Number(input[2]);
    let pricePerBatch = 0;

    switch (size) {
        case "Large":
            if (color === "Red") {
                pricePerBatch = 16;
            } else if (color === "Green") {
                pricePerBatch = 12;
            } else if (color === "Yellow") {
                pricePerBatch = 9;
            }
            break;

        case "Medium":
            if (color === "Red") {
                pricePerBatch = 13;
            } else if (color === "Green") {
                pricePerBatch = 9;
            } else if (color === "Yellow") {
                pricePerBatch = 7;
            }
            break;

        case "Small":
            if (color === "Red") {
                pricePerBatch = 9;
            } else if (color === "Green") {
                pricePerBatch = 8;
            } else if (color === "Yellow") {
                pricePerBatch = 5;
            }
            break;
    }

    let batchPrice = batches * pricePerBatch;
    let expenses = batchPrice * 0.35;
    let endPrice = batchPrice - expenses;

    console.log(`${endPrice.toFixed(2)} leva.`);
}
paintingEggs(["Medium",
    "Green",
    "5"])

