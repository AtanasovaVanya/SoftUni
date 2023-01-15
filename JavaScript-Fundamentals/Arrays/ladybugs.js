function ladybugs(arr) {
    let fieldSize = arr.shift();
    let ladybugPositions = arr.shift().split(' ');
    let resultArray = [];

    for (let i = 0; i < fieldSize; i++) {
        resultArray.push(0);
    }

    for (let j = 0; j < ladybugPositions.length; j++) {
        let currentPosition = Number(ladybugPositions[j]);

        if (currentPosition < 0 || currentPosition >= fieldSize) {
            continue;
        }
        resultArray[currentPosition] = 1;
    }

    for (let k = 0; k < arr.length; k++) {
        let [ladybugIndex, direction, flyLength] = arr[k].split(' ');

        ladybugIndex = Number(ladybugIndex);

        if (ladybugIndex < 0 || ladybugIndex >= resultArray.length || resultArray[ladybugIndex] !== 1) {
            continue;
        }
        resultArray[ladybugIndex] = 0;

        flyLength = Number(flyLength);
        if (direction === 'left') {
            flyLength = -flyLength;
        }

        ladybugIndex += flyLength;

        while (ladybugIndex >= 0 && ladybugIndex < resultArray.length) {
            if (resultArray[ladybugIndex] === 0) {
                resultArray[ladybugIndex] = 1;
                break;
            }
            ladybugIndex += flyLength;
        }
    }
    console.log(resultArray.join(' '));
}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);

ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
)

ladybugs([5, '3',
    '3 left 2',
    '1 left -2']
)