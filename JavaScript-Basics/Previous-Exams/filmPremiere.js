function filmPremiere(input) {
    let movie = input[0];
    let package = input[1];
    let tickets = Number(input[2]);
    let price = 0;
    let total = 0;

    switch (movie) {
        case "John Wick":
            if (package === "Drink") {
                price = 12;
            } else if (package === "Popcorn") {
                price = 15;
            } else if (package === "Menu") {
                price = 19;
            }

            total = price * tickets;
            break;
        case "Star Wars":
            if (package === "Drink") {
                price = 18;
            } else if (package === "Popcorn") {
                price = 25;
            } else if (package === "Menu") {
                price = 30;
            }

            if (tickets >= 4) {
                total = price * tickets - ((price * tickets) * 0.30);
            } else {
                total = price * tickets;
            }
            break;
        case "Jumanji":
            if (package === "Drink") {
                price = 9;
            } else if (package === "Popcorn") {
                price = 11;
            } else if (package === "Menu") {
                price = 14;
            }

            if (tickets === 2) {
                total = price * tickets - ((price * tickets) * 0.15);
            } else {
                total = price * tickets;
            }
            break;
    }
    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
    "Menu",
    "2"])


