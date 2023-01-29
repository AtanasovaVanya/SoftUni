function houseParty(arr) {

    let final = [];

    for (let i = 0; i < arr.length; i++) {
        let guests = arr[i].split(' ');
        let name = guests[0];

        if (guests.length === 3) {
            if (final.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                final.push(name);
            }
        } else {
            if (!final.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = final.indexOf(name);
                final.splice(index, 1);
            }
        }
    }
    console.log(final.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);