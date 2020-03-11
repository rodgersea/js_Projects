button1.onclick = function() {
    document.getElementById("box").style.backgroundColor = "blue";
}

button2.onclick = function() {
    var r = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var bgcl = "rgb(" + r + ", " + b + ", " + g + ")";
    document.getElementById("box").style.backgroundColor = bgcl;
    document.getElementById("hold").innerHTML = bgcl;
}