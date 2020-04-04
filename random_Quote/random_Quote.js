button1.onclick = function() {
    quoteArray = ["example1", "example2", "example3"];
    var qte = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    document.getElementById("quote").innerHTML = qte;
}
