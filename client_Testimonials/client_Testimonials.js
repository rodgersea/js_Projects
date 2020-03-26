var imgAr = [
    "j1.jpg",
    "j2.jpg",
    "j3.jpg",
    "j4.jpg",
    "j6.jpg"
            ]

var catPraise = [
    "oh my fucking god he's so majestic. watch how he observes the mountain range with dignity and respect.",
    "how can a cat be so much better than every other cat? it's seriously not fair to the other cats.",
    "i love him so much i would do almost anything for that tuxedo wearing, box sitting masterpiece of an animal",
    "god was really feelin himself the day he made this cat. i mean wow. just wow. phenomenal cat.",
    "i want to squeeze the life out of him",
    "what a handsome kit. don't go changing for anyone jasper you are perfect just the way you are. I aspire to be as magnificent as thou one day."
]
var start = 0;
window.onload = function () {
    var riting = catPraise[start];
    document.getElementById("ily").innerHTML = riting;
    document.getElementById("jasper").src = imgAr[start];
}


right.onclick = function () {
    if (start == (imgAr.length - 1)) {
        start = 0;
    } else {
    start++;
    }
    document.getElementById("jasper").src = imgAr[start];
    var riting = catPraise[start];
    console.log(riting);
    document.getElementById("ily").innerHTML = riting;
}

left.onclick = function () {
    if (start == 0) {
        start = (imgAr.length - 1);
    } else {
        start--;
    }
    document.getElementById("jasper").src = imgAr[start];
    var riting = catPraise[start];
    console.log(riting);
    document.getElementById("ily").innerHTML = riting;
}

