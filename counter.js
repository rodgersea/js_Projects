function raise() {
    var x = parseInt(document.getElementById("count").value);
    console.log(document.getElementById("count"));
    var y = x + 1;
    document.getElementById("count").innerHTML = y;
}

function lower() {
    var x = document.getElementById("count").value;
    var y = x - 1;
    document.getElementById("count").innerHTML = y;
}