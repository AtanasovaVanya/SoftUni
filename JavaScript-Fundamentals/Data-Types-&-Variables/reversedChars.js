function reversedChars(char1, char2, char3) {
    let toArr = (char1 + char2 + char3).split('');
    let reversedArr = toArr.reverse();
    let result = reversedArr.join(' ');
    console.log(result);
}
reversedChars('A',
    'B',
    'C'
)