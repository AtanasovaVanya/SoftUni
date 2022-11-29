function sleepyTom(input) {
    let restDays = Number(input[0]);

    let restPlayMin = restDays * 127;
    let workPlayMin = (365 - restDays) * 63;
    let totalPlayTime = restPlayMin + workPlayMin;

    let totalMinLeft = Math.abs(30000 - totalPlayTime);
    hours = totalMinLeft / 60;
    H = Math.floor(hours);
    minutes = (hours - H) * 60;
    M = Math.round(minutes);

    if (totalPlayTime < 30000) {
        console.log(`Tom sleeps well`);
        console.log(`${H} hours and ${M} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        console.log(`${H} hours and ${M} minutes more for play`);

    }
}

sleepyTom(["113"]);