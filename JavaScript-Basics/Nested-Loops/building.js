function building(input) {
    let floorCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let floorNum = floorCount; floorNum >= 1; floorNum--) {

        let roomType = "";
        if (floorNum === floorCount) {
            roomType = "L";
        } else if (floorNum % 2 == 0) {
            roomType = "O";
        } else {
            roomType = "A";
        }
        let floor = "";
        for (let roomNumber = 0; roomNumber < roomsCount; roomNumber++) {
            floor = floor + `${roomType}${floorNum}${roomNumber} `;
        }
        console.log(floor.trim());
    }
}

building(["6", "4"])
