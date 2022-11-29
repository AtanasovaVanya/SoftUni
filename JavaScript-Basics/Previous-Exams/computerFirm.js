function computerFirm(input) {
    let numComps = Number(input[0]);
    let totalRating = 0;
    let ratingCounter = 0;
    let saleMade = 0;
    let totalSaleMade = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNum = input[i];

        let lastDigitStr = currentNum.slice(-1);
        let rating = Number(lastDigitStr);
        totalRating += rating;
        ratingCounter++;

        let first2Str = currentNum.slice(0, 2);
        let possibleSale = Number(first2Str);


        if (rating === 2) {
            saleMade = possibleSale * 0;
        } else if (rating === 3) {
            saleMade = possibleSale * 0.50;
        } else if (rating === 4) {
            saleMade = possibleSale * 0.70;
        } else if (rating === 5) {
            saleMade = possibleSale * 0.85;
        } else if (rating === 6) {
            saleMade = possibleSale * 1;
        }
        totalSaleMade += saleMade;

    }
    console.log(totalSaleMade.toFixed(2));
    console.log((totalRating / ratingCounter).toFixed(2));

}
computerFirm(["3",
    "103",
    "103",
    "103"])