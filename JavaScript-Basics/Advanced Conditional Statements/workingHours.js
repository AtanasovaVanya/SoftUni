function workingHours(input) {
    let timeOfDay = Number(input[0]);
    let day = input[1];



    if (day == "Sunday") {
        console.log("closed");
    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday") {
        if (timeOfDay >= 10 && timeOfDay <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    }
}


workingHours(["19",
    "Friday"])

