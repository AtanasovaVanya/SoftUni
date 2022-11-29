function birthdayParty(input) {
    let rent = Number(input);

    let cakePrice = rent * 0.20;
    let drinks = cakePrice - (cakePrice * 0.45);
    let animator = rent / 3;

    let total = rent + cakePrice + drinks + animator;
    console.log(total);
}
birthdayParty(["2250"])