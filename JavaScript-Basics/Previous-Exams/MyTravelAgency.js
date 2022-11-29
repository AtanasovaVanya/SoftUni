function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let hasVip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;
    let total = 0;


    switch (city) {
        case "Bansko":
        case "Borovets":
            if (days < 1) {
                console.log("Days must be positive number!");
            } else if (package === "noEquipment" && hasVip === "yes") {
                pricePerDay = 80 - (80 * 0.05);
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else if (package === "noEquipment" && hasVip === "no") {
                pricePerDay = 80;
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }

            } else if (package === "withEquipment" && hasVip === "yes") {
                pricePerDay = 100 - (100 * 0.10);
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else if (package === "withEquipment" && hasVip === "no") {
                pricePerDay = 100;
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else {
                console.log("Invalid input!");
            }

            break;

        case "Varna":
        case "Burgas":
            if (days < 1) {
                console.log("Days must be positive number!");
            } else if (package === "noBreakfast" && hasVip === "yes") {
                pricePerDay = 100 - (100 * 0.07);
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else if (package === "noBreakfast" && hasVip === "no") {
                pricePerDay = 100;
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else if (package === "withBreakfast" && hasVip === "yes") {
                pricePerDay = 130 - (130 * 0.12);
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else if (package === "withBreakfast" && hasVip === "no") {
                pricePerDay = 130;
                total = pricePerDay * days;
                if (days > 7) {
                    total = total - pricePerDay;
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                } else {
                    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
                }
            } else {
                console.log("Invalid input!");
            }
            break;

        default:
            console.log("Invalid input!");
            break;
    }
}

travelAgency(["Burgas",
    "noBreakfast",
    "no",
    "4"])







