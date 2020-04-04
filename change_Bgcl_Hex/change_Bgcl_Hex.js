button1.onclick = function() {
    var pool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var myHex = '#';

    for (i=0; i<6; i++){
        var randPool = Math.floor(Math.random() * pool.length);
        myHex += pool[randPool];
    }

    document.getElementById("box").style.backgroundColor = myHex;
    document.getElementById("hold").innerHTML = myHex;
}