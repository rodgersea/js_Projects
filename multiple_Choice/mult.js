var answers = [];
answers[0] = [
    "q0",
    "zero",
    "one",
    "two",
    // correct answer in position [4]
    "zero"
];
answers[1] = [
    "q1",
    "zero",
    "one",
    "two",
    // correct answer in position [4]
    "one"
];
answers[2] = [
    "q2",
    "zero",
    "one",
    "two",
    // correct answer in position [4]
    "two"
];

var choice = "";
var card_Num = 0;
var score = 0;
var start = document.querySelector("#start-game");
var title = document.querySelector("#title");
var card_Div = document.querySelector("#card-div");

// html button starts quiz and clears html content
start.onclick = function () {
    title.textContent = "";
    startGame();
}

// main function
function startGame() {
    // clears card content from previous question
    while (card_Div.firstChild) {
        card_Div.removeChild(card_Div.lastChild);
    }
    
    // create div and button for one question
    // runs after every question answer
    var boo = [];
    for (i=0; i < 5; i++) {
        if (i == 0) {
        boo[i] = document.createElement("div");
        boo[i].textContent = answers[card_Num][i];
        card_Div.appendChild(boo[i]);
        } else {
        boo[i] = document.createElement("button");
        boo[i].textContent = answers[card_Num][i];
        card_Div.appendChild(boo[i]);
        }
    }    

    // gets button content to match against answer key
    card_Div.addEventListener("click", function(event) {
    var choice = event.target.textContent;
        // increments score if correct
        if (choice == answers[card_Num][4]) {
            score++;
            console.log("score " + score);
        }
        // ends quiz at end of question bank
        if (card_Num == 3) {
            ending();
        }
        // increments card counter after each answer
        if (card_Num < 3) {
            card_Num++;
        }
        // loads next question
        startGame();        
    })
}
// this will display final score
function ending() {
    card_Div.textContent = "";
}
