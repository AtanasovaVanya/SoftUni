function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceMeter = Number(input[1]);
    let seconds1Meter = Number(input[2]);

    let toClimb = distanceMeter * seconds1Meter;
    let every50Meters = (Math.floor(distanceMeter / 50)) * 30;
    let totalTime = toClimb + every50Meters;

    if (recordInSeconds > totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else if (recordInSeconds <= totalTime) {
        console.log(`No! He was ${(Math.abs(recordInSeconds - totalTime)).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
    "389",
    "3"])





