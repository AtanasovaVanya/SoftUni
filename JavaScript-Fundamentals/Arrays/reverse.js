function reverse(num, arr) {
    let reverseArr = [];

    for (let i = num - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }

    console.log(reverseArr.join(" "));
}

reverse(3, [10, 20, 30, 40, 50]);