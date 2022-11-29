function reportSystem(input) {
    let expectedSum = Number(input[0]);
    let index = 1;
    let command = input[index];

    let cashTotal = 0;
    let cardTotal = 0;

    let numCardPayment = 0;
    let numCashPayment = 0;


    while (command !== "End") {
        if (index === input.length) {
            break;
        }

        let productPrice = Number(command);


        if (index % 2 !== 0) {
            if (productPrice <= 100) {
                numCashPayment++;
                cashTotal += productPrice;
                console.log("Product sold!");

            } else {
                console.log("Error in transaction!");
            }
        }

        if (index % 2 === 0) {
            if (productPrice >= 10) {
                numCardPayment++;
                cardTotal += productPrice;
                console.log("Product sold!");

            } else {
                console.log("Error in transaction!");
            }
        }

        let total = cashTotal + cardTotal;
        let avgCardPayment = cardTotal / numCardPayment;
        let avgCashPayment = cashTotal / numCashPayment;


        if (total >= expectedSum) {
            console.log(`Average CS: ${avgCashPayment.toFixed(2)} `);
            console.log(`Average CC: ${avgCardPayment.toFixed(2)} `);
            break;
        }

        index++;
        command = input[index];
    }


    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }


}


// reportSystem(["500",
//     "120",
//     "8",
//     "63",
//     "256",
//     "78",
//     "317"
// ])

reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
])