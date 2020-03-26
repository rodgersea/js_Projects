function raise() {
    var x = document.getElementById("count");
    y = x.textContent
    y ++;
    document.getElementById("count").innerHTML = y;
}

function lower() {
    var x = document.getElementById("count");
    y = x.textContent
    y --;
    document.getElementById("count").innerHTML = y; 
}