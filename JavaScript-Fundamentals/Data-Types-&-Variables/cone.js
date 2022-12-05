function cone(a, b) {
    let lengthOfSlant = Math.sqrt(a * a + b * b);
    let volume = Math.PI * a * a * b / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    let area = Math.PI * a * (a + lengthOfSlant);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,
    5
);