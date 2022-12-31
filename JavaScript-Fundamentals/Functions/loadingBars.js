function loadingBars(num) {
    let completed = '%'.repeat(num / 10);
    let incomplete = '.'.repeat(10 - completed.length);

    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[${completed}]`);
    } else if (num < 100 && num > 0) {
        console.log(`${num}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }
}
loadingBars(50);