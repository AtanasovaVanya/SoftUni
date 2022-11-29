function hospital(input) {
    let days = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;



    for (let i = 1; i <= days; i++) {
        let currentDayPatients = Number(input[i]);

        if (i % 3 == 0) {
            if (untreatedPatients > treatedPatients) {
                doctors += 1;
            }
            if (currentDayPatients <= doctors) {
                treatedPatients += currentDayPatients;
            } else if (currentDayPatients > doctors) {
                treatedPatients += doctors;
                untreatedPatients += currentDayPatients - doctors;
            }

        }


        if (i % 3 !== 0) {
            if (currentDayPatients <= doctors) {
                treatedPatients += currentDayPatients;
            } else if (currentDayPatients > doctors) {
                treatedPatients += doctors;
                untreatedPatients += currentDayPatients - doctors;
            }
        }


    }

    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(["4",
    "7",
    "27",
    "9",
    "1"
])

// hospital(["3",
//     "7",
//     "7",
//     "7"

// ])
// hospital(["6",
//     "25",
//     "25",
//     "25",
//     "25",
//     "25",
//     "2"])
