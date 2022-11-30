function sum(n) {
    let total = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        counter++;
        total += n;
        if (counter === n) {
            console.log(`Sum: ${total}`);
            break;
        }
    }
}
sum(4);