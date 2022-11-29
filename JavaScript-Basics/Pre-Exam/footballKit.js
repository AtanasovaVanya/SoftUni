function footballKit(input) {
    let tShirtPrice = Number(input[0]);
    let neededSum = Number(input[1]);

    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let sneakers = (tShirtPrice + shortsPrice) * 2;
    let total = tShirtPrice + shortsPrice + socksPrice + sneakers;
    let discountedPrice = total - (total * 0.15);

    if (discountedPrice >= neededSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${discountedPrice.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(neededSum - discountedPrice).toFixed(2)} lv. more.`);
    }
}

footballKit(["55",
    "310"])
