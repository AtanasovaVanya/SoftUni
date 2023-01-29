function train(arr) {
    let wagonsOfPassengers = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commandCount = arr[i].split(' ');

        if (commandCount[0] === 'Add') {
            let newPassengers = Number(commandCount[1]);
            wagonsOfPassengers.push(newPassengers);
        } else {
            for (let j = 0; j < wagonsOfPassengers.length; j++) {
                if (wagonsOfPassengers[j] + Number(commandCount[0]) <= maxCapacity) {
                    wagonsOfPassengers[j] += Number(commandCount[0]);
                    break;
                }
            }
        }
    }
    console.log(wagonsOfPassengers.join(' '));
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75']);