function favouriteMovie(input) {
    let index = 0;
    let command = input[index];
    let movie = "";
    let points = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let counter = 0;
    let bestMovie = "";

    while (command !== "STOP") {
        movie = command;
        counter++;
        for (let i = 0; i < movie.length; i++) {
            let letter = movie.charAt(i);
            let asciiValue = letter.charCodeAt();
            if (asciiValue >= 65 && asciiValue <= 90) {
                asciiValue -= movie.length;
            } else if (asciiValue >= 97 && asciiValue <= 122) {
                asciiValue -= movie.length * 2;
            }
            points += asciiValue;
        }

        if (points > maxPoints) {
            maxPoints = points;
            bestMovie = movie;
        }

        if (counter >= 7) {
            console.log("The limit is reached.");
            break;
        }

        points = 0;
        index++;
        command = input[index];
    }
    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);
}
favouriteMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"])


