function trekkingMania(input) {
    let numOfGroups = Number(input[0]);
    let numPeopleInGroup = 0;
    let totalNumPeople = 0;

    let Musala = 0;
    let Monblanc = 0;
    let Kilimanjaro = 0;
    let kTwo = 0;
    let Everest = 0;


    for (let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i]);
        totalNumPeople += currentNum;


        if (currentNum <= 5) {
            Musala += currentNum;

        } else if (currentNum >= 6 && currentNum <= 12) {
            Monblanc += currentNum;

        } else if (currentNum >= 13 && currentNum <= 25) {
            Kilimanjaro += currentNum;

        } else if (currentNum >= 26 && currentNum <= 40) {
            kTwo += currentNum;

        } else {
            Everest += currentNum;

        }
    }

    let perMusala = Musala / totalNumPeople * 100;
    console.log(`${perMusala.toFixed(2)}%`);
    let perMonblanc = Monblanc / totalNumPeople * 100;
    console.log(`${perMonblanc.toFixed(2)}%`);
    let perKilimanjaro = Kilimanjaro / totalNumPeople * 100;
    console.log(`${perKilimanjaro.toFixed(2)}%`);
    let perKTwo = kTwo / totalNumPeople * 100;
    console.log(`${perKTwo.toFixed(2)}%`);
    let perEverest = Everest / totalNumPeople * 100;
    console.log(`${perEverest.toFixed(2)}%`);
}



trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
