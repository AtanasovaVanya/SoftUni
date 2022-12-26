// 1.Version:
// function charactersInRange(char1, char2) {
//     let firstCharNum = char1.charCodeAt(0);
//     let secondCharNum = char2.charCodeAt(0);
//     let result = '';

//     if (firstCharNum > secondCharNum) {
//         for (let i = secondCharNum + 1; i < firstCharNum; i++) {
//             let res = String.fromCharCode(i);
//             result += `${res} `;
//         }
//     } else if (secondCharNum > firstCharNum) {
//         for (let i = firstCharNum + 1; i < secondCharNum; i++) {
//             let res = String.fromCharCode(i);
//             result += `${res} `;
//         }
//     }
//     console.log(result);
// }

//2.Version:
function charactersInRange(char1, char2) {
    let startCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let charsArr = [];

    for (let i = startCode + 1; i < endCode; i++) {
        let res = String.fromCharCode(i);
        charsArr.push(res);
    }

    console.log(charsArr.join(" "));
}
charactersInRange('a', 'd');

