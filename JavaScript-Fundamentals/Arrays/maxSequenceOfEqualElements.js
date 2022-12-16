function maxSequenceOfEqualElements(arr) {
    let maxSeq = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSeq = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentSeq.push(arr[i]);
            } else {
                break;
            }
        }
        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq;
        }
    }
    console.log(maxSeq.join(" "));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

