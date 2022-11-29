function clocks() {

    for (let i = 0; i <= 23; i++) {
        let hour = i;
        for (let j = 0; j <= 59; j++) {
            let minutes = j;
            for (let s = 0; s <= 59; s++) {
                let seconds = s;
                console.log(`${hour} : ${minutes} : ${seconds}`)
            }
        }

    }
}

clocks()