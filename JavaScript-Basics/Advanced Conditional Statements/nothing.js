// let examHour = exH / 60;
// let rExamHour = Math.floor(examHour);
// let examMinutes = Math.round((examHour - rExamHour) * 60);
// let arrivalHour = arrH / 60;
// let rArrHour = Math.floor(arrivalHour);
// let arrivalMinutes = Math.round((arrivalHour - rArrHour) * 60);
// let diffMin = examMinutes - arrivalMinutes;

// let number = 00 % (60 * 60);
// console.log(number);
// let result = 55 / 60;
// console.log(result);

function examTime(input) {
    let exH = Number(input[0]);
    let exMin = Number(input[1]);
    let arrH = Number(input[2]);
    let arrMin = Number(input[3]);


    let examHour = exH / 60;
    let rExamHour = Math.floor(examHour);

    let examMinutes = exMin % 60;
    let arrivalHour = arrH / 60;
    let rArrHour = Math.floor(arrivalHour);

    let arrivalMinutes = arrMin % 60;
    let diffMin = examMinutes - arrivalMinutes;

    if (rExamHour === rArrHour && examMinutes >= arrivalMinutes) {
        console.log("On time");
    } else if (examHour < arrivalHour) {
        console.log("Late");
    } else if (examHour > arrivalHour) {
        console.log("Early")
    }

    if (examMinutes == 0 && arrivalMinutes <= 30) {
        console.log(`${diffMin} minutes before the start`);

    }
}

examTime(["14",
    "00",
    "13",
    "55"])



