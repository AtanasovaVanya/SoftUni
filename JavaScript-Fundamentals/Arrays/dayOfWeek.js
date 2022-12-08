function dayOfWeek(num) {

    if (num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        let weekdays = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        console.log(weekdays[num - 1]);
    }


}
dayOfWeek(5);