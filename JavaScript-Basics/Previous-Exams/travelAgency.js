//Better solution by Mitko from Discord


function travelAgency(input) {
    let index = 0;
    let destination = String(input[index++]);
    let package = String(input[index++]);
    let vip = String(input[index++]);
    let days = Number(input[index++]);
    let dayPrice = 0;
    let invalid = false;

    if (days > 7) days--;

    switch (destination) {
        case "Bansko":
        case "Borovets": {
            switch (package) {
                case "noEquipment": {
                    if (vip === "yes") {
                        dayPrice = 80 * 0.95;
                    } else if (vip === "no") {
                        dayPrice = 80;
                    } else {
                        invalid = true;
                    }
                }
                    break;
                case "withEquipment": {
                    if (vip === "yes") {
                        dayPrice = 100 * 0.90;
                    } else if (vip === "no") {
                        dayPrice = 100;
                    } else {
                        invalid = true;
                    }
                }
                    break;
                default: {
                    invalid = true;
                }
                    break;
            }
        }
            break;
        case "Varna":
        case "Burgas": {
            switch (package) {
                case "noBreakfast": {
                    if (vip === "yes") {
                        dayPrice = 100 * 0.93;
                    } else if (vip === "no") {
                        dayPrice = 100;
                    } else {
                        invalid = true;
                    }
                }
                    break;
                case "withBreakfast": {
                    if (vip === "yes") {
                        dayPrice = 130 * 0.88;
                    } else if (vip === "no") {
                        dayPrice = 130;
                    } else {
                        invalid = true;
                    }
                }
                    break;
                default: {
                    invalid = true;
                }
                    break;
            }
        }
            break;
        default: {
            invalid = true;
        }
            break;
    }
    if (!invalid && days >= 1) {
        console.log(`The price is ${(dayPrice * days).toFixed(2)}lv! Have a nice time!`);
    } else if (!invalid) {
        console.log("Days must be positive number!");
    } else {
        console.log("Invalid input!");
    }
}

travelAgency(["Varna",
    "withBreakfast",
    "no",
    "0"])













// else {
            //     console.log("Invalid input!");
            // }