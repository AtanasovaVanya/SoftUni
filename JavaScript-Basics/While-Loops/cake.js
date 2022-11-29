function cake(input) {
    let lengthCake = Number(input[0]);
    let widthCake = Number(input[1]);
    let index = 2;
    let piecesCounter = 0;
    let command = input[index];

    let cakeSize = lengthCake * widthCake;

    while (command !== "STOP") {
        let cakeTaken = Number(command);
        piecesCounter += cakeTaken;
        if (cakeSize < piecesCounter) {
            console.log(`No more cake left! You need ${piecesCounter - cakeSize} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "STOP" && piecesCounter <= cakeSize) {

        console.log(`${cakeSize - piecesCounter} pieces are left.`)
    }

}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);

