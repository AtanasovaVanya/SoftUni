function printNthElement(arr) {
    let step = Number(arr[arr.length - 1]);


    for (let i = 0; i < arr.length - 1; i += step) {
        let element = arr[i];
        console.log(element);
    }

}
printNthElement(['1', '2', '3', '4', '5', '6'])