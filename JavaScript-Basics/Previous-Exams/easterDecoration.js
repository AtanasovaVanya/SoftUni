function easterDecoration(input) {

    let clients = Number(input[0]);
    let index = 1;
    let command = input[index];
    let itemCounter = 0;
    let itemPrice = 0;
    let total = 0;
    let totalSum = 0;

    for (let i = index; i <= clients; i++) {
        total = 0;
        itemCounter = 0;

        while (command !== "Finish") {
            let item = command;
            switch (item) {
                case "basket":
                    itemPrice = 1.50;
                    total += itemPrice;
                    itemCounter++;
                    break;
                case "wreath":
                    itemPrice = 3.80;
                    total += itemPrice;
                    itemCounter++;
                    break;
                case "chocolate bunny":
                    itemPrice = 7;
                    total += itemPrice;
                    itemCounter++;
                    break;
            }
            index++;
            command = input[index];
        }
        if (itemCounter % 2 === 0) {
            total = total * 0.80;
        }
        totalSum += total;
        console.log(`You purchased ${itemCounter} items for ${total.toFixed(2)} leva.`);

        index++;
        command = input[index];
    }
    console.log(`Average bill per client is: ${(totalSum / clients).toFixed(2)} leva.`);
}
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])
