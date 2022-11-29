function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);
    let total = 0.0;

    if (city == "Sofia") {
        if (product == "coffee") {
            total = qty * 0.50;
            console.log(total);

        } else if (product == "water") {
            total = qty * 0.80;
            console.log(total);

        } else if (product == "beer") {
            total = qty * 1.20;
            console.log(total);

        } else if (product == "sweets") {
            total = qty * 1.45;
            console.log(total);

        } else if (product == "peanuts") {
            total = qty * 1.60;
            console.log(total);

        }

    } else if (city == "Plovdiv") {
        if (product == "coffee") {
            total = qty * 0.40;
            console.log(total);

        } else if (product == "water") {
            total = qty * 0.70;
            console.log(total);

        } else if (product == "beer") {
            total = qty * 1.15;
            console.log(total);

        } else if (product == "sweets") {
            total = qty * 1.30;
            console.log(total);

        } else if (product == "peanuts") {
            total = qty * 1.50;
            console.log(total);

        }

    } else if (city == "Varna") {
        if (product == "coffee") {
            total = qty * 0.45;
            console.log(total);

        } else if (product == "water") {
            total = qty * 0.70;
            console.log(total);

        } else if (product == "beer") {
            total = qty * 1.10;
            console.log(total);

        } else if (product == "sweets") {
            total = qty * 1.35;
            console.log(total);

        } else if (product == "peanuts") {
            total = qty * 1.55;
            console.log(total);

        }

    }
}

smallShop(["coffee",
    "Varna",
    "2"])
