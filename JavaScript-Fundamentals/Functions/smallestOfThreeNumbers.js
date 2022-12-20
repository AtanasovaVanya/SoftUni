// 1.Version
// function smallestOfThreeNumbers(a, b, c) {

//     let smallest = 0;

//     if (a < b && a < c) {
//         smallest = a;
//     } else if (b < a && b < c) {
//         smallest = b;
//     } else if (c < a && c < b) {
//         smallest = c;
//     }

//     return smallest;

// }
//2.Version
function smallestOfThreeNumbers(a, b, c) {

    let smallest = Math.min(a, b, c);
    return smallest;

}
console.log(smallestOfThreeNumbers(600,
    342,
    123

));