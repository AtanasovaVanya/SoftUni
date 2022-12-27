function orders(product, qty) {
    let total = 0;

    switch (product) {
        case 'coffee':
            total = qty * 1.50;
            break;
        case 'coke':
            total = qty * 1.40;
            break;
        case 'water':
            total = qty * 1.00;
            break;
        case 'snacks':
            total = qty * 2.00;
            break;
    }
    console.log(total.toFixed(2));
}
orders("coffee", 2);