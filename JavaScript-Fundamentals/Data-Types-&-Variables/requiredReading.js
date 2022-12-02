function requiredReading(pages, pagesPerHour, days) {
    let total = pages / pagesPerHour;
    let output = total / days;
    console.log(output);
}
requiredReading(212,
    20,
    2
);