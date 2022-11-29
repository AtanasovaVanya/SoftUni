function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];

    let primeNumbers = 0;
    let nonPrimeNumbers = 0;

    while (command !== 'stop') {

        let number = Number(command);

        if (number < 0) {
            console.log("Number is negative.");
            command = input[++index];
            continue;
        }

        let isPrime = true;

        if (number == 1) {
            isPrime = false;
        } else if (number == 2) {
            isPrime = true;
        } else {
            for (let i = number; i >= 2; i--) {
                if (number % i == 0 && i != number) {
                    isPrime = false;
                    break;
                }
            }

        }

        if (isPrime) {
            primeNumbers += number;
        } else {
            nonPrimeNumbers += number;
        }

        command = input[++index];


    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);
}

//Not my solution but it also works
// function primeNonPrime(input) {
//     let command = input.shift();

//     let primeSum = 0;
//     let nonPrimeSum = 0;


//     while (command != "stop") {
//         let num = Number(command);
//         if (num < 0) {
//             console.log("Number is negative.");
//             command = input.shift();
//             continue;
//         }

//         let isPrime = true;

//         if (num == 1) {
//             isPrime = false;
//         } else if (num == 2) {
//             isPrime = true;
//         } else {
//             for (let i = num; i >= 2; i--) {
//                 if (num % i == 0 && i != num) {
//                     isPrime = false;
//                     break;
//                 }
//             }

//         }


//         if (isPrime) {
//             primeSum += num;
//         } else {
//             nonPrimeSum += num;
//         }

//         command = input.shift();

//     }
//     console.log(`Sum of all prime numbers is: ${primeSum}`);
//     console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
// }
sumPrimeNonPrime(["0",
    "-9",
    "0",
    "stop"])



