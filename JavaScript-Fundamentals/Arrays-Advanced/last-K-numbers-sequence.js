function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 0; i < n - 1; i++) {
        let lastElements = sequence.slice(- k);
        let sum = 0;

        for (let el of lastElements) {
            sum += el;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}
lastKNumbersSequence(6, 3);