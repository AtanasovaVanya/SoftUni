function gymnastics(input) {
    let country = input[0];
    let appliance = input[1];
    let difficulty = 0;
    let performance = 0;


    switch (country) {
        case 'Russia':
            if (appliance === 'ribbon') {
                difficulty = 9.100;
                performance = 9.400;
            } else if (appliance === 'hoop') {
                difficulty = 9.300;
                performance = 9.800;
            } else if (appliance === 'rope') {
                difficulty = 9.600;
                performance = 9.000;
            } break;
        case 'Bulgaria':
            if (appliance === 'ribbon') {
                difficulty = 9.600;
                performance = 9.400;
            } else if (appliance === 'hoop') {
                difficulty = 9.550;
                performance = 9.750;
            } else if (appliance === 'rope') {
                difficulty = 9.500;
                performance = 9.400;
            } break;
        case 'Italy':
            if (appliance === 'ribbon') {
                difficulty = 9.200;
                performance = 9.500;
            } else if (appliance === 'hoop') {
                difficulty = 9.450;
                performance = 9.350;
            } else if (appliance === 'rope') {
                difficulty = 9.700;
                performance = 9.150;
            } break;
    }
    let totalScore = difficulty + performance;
    let insufficientPoints = 20 - totalScore;
    let percentLeft = (insufficientPoints / 20) * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${appliance}.`);
    console.log(`${percentLeft.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);
