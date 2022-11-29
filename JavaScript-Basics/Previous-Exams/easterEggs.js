function easterEggs(input) {
    let paintedEggsAmount = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let color = "";

    for (let i = 1; i <= paintedEggsAmount; i++) {
        let eggsColor = input[i];

        switch (eggsColor) {
            case "red":
                red++;
                break;

            case "orange":
                orange++;
                break;

            case "blue":
                blue++;
                break;

            case "green":
                green++;
                break;
        }

        if (red > max) {
            max = red;
            color = "red";
        } else if (orange > max) {
            max = orange;
            color = "orange";
        } else if (blue > max) {
            max = blue;
            color = "blue";
        } else if (green > max) {
            max = green;
            color = "green";
        }

    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${color}`);

}
easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"])

