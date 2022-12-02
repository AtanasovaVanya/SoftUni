function spiceMustFlow(yield) {
    let total = 0;
    let days = 0;

    while (yield >= 100) {
        total += yield - 26;
        yield -= 10;
        days++;
    }

    console.log(days);

    if (days !== 0) {
        console.log(total - 26);
    } else {
        console.log(total);
    }
}
spiceMustFlow(111);
