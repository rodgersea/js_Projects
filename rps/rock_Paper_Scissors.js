btn.onclick = function() {

var rps = ["rock", "paper", "scissors"];
var comp1 = Math.floor(Math.random() * rps.length);
console.log(comp1);
var comp2 = Math.floor(Math.random() * rps.length);
console.log(comp2);
var comp3 = Math.floor(Math.random() * rps.length);
console.log(comp3);

var comp = [comp1, comp2, comp3];

var p_Score = 0;
var c_Score = 0;

alert("play computer best two out of three");

for (var i=0; i < 3; i++) {
    var choice = prompt("enter rock[0], paper[1], or scissors[2] (case sensitive)");
if (input === null) {
    return;
} else if ((choice == 0 && comp[i] == 2) || (choice == 1 && comp[i] == 0) || (choice == 2 && comp[i] == 1)) {
    alert("good job");
    p_Score ++;
    document.getElementById("player-score").innerHTML = p_Score;
    document.getElementById("computer-score").innerHTML = c_Score;
} else if (choice == comp[i]){
    alert("tie, play again")
    i --;
    document.getElementById("player-score").innerHTML = p_Score;
    document.getElementById("computer-score").innerHTML = c_Score;
} else {
    c_Score ++;
    alert("nope");

    document.getElementById("player-score").innerHTML = p_Score;
    document.getElementById("computer-score").innerHTML = c_Score;
}
}
}





