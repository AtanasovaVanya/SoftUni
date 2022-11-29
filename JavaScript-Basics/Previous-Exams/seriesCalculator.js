function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timePerEpisode = Number(input[3]);

    let adverts = timePerEpisode * 0.20;
    let episodeWithAds = timePerEpisode + adverts;
    let extraTime = seasons * 10;
    let total = episodeWithAds * episodes * seasons + extraTime;

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(total)} minutes.`);
}
seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"])
