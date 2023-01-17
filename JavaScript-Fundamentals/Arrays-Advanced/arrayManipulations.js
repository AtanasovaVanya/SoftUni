function arrayManipulations(commands) {

    let myArray = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add": add(firstNum); break;
            case "Remove": remove(firstNum); break;
            case "RemoveAt": removeAt(firstNum); break;
            case "Insert": insert(firstNum, secondNum); break;
        }

    }

    function add(el) {
        myArray.push(el);
    }

    function remove(num) {
        myArray = myArray.filter(el => el !== num);
    }

    function removeAt(index) {
        myArray.splice(index, 1);
    }

    function insert(num, index) {
        myArray.splice(index, 0, num);
    }
    console.log(myArray.join(" "));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);