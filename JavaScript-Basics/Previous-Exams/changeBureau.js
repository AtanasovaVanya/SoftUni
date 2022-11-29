function change(input) {
    let bitcoins = Number(input[0]);
    let rnb = Number(input[1]);
    let commission = Number(input[2]);

    let bitToLeva = bitcoins * 1168;
    let rnbToUSD = rnb * 0.15;
    let USDtoLeva = rnbToUSD * 1.76;
    let total = (bitToLeva + USDtoLeva) / 1.95;
    let result = total - (total * (commission / 100));

    console.log(result.toFixed(2));

}
change(["1",
    "5",
    "5"])