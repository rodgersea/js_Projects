
// QUESTION BANK
// ________________________________________________________________________________________________________________

// correct answers in position [5]
var answers = [];
answers[0] = [
    "q0",
    "zero",
    "one",
    "two",
    "three",
    "zero"
];
answers[1] = [
    "q1",
    "zero",
    "one",
    "two",
    "three",
    "zero"
];
answers[2] = [
    "q2",
    "zero",
    "one",
    "two",
    "three",
    "zero"
];
answers[3] = [
    "q3",
    "zero",
    "one",
    "two",
    "three",
    "zero"
];
answers[4] = [
    "q4",
    "zero",
    "one",
    "two",
    "three",
    "zero"
];

// VARIABLE LIST
// ________________________________________________________________________________________________________________

// empty starting variables used during quiz
var choice = "";
var card_Num = 0;
var score = 0;
// starting value for final score
var timer_Value = 100;
// start game button
var start = document.querySelector("#start-game");
// holds all the content for start screen besides scores
var title = document.querySelector("#title");
// holds all the question content
var card_Div = document.querySelector("#card-div");
// timer display in header
var timer = document.querySelector("#timer");
// clear score button
var clear_Scores = document.querySelector("#clear-score");
// load start screen button located on finish screen only
var load_Start = document.querySelector("#load-start");
// variables for finish screen
puntos = [];
// ul node
var score_List = document.querySelector("#score-list");
// form node
var score_Form = document.querySelector("#score-form");
// input node
var init_Input = document.querySelector("#init-score")
// puntos node
var punt = document.querySelector(".puntos");

// ONCLICK FUNCTIONS
// ________________________________________________________________________________________________________________

// start button starts quiz and clears html content
start.onclick = function() {
    punt.style.display = "none";
    timer.style.display = "block";
    title.textContent = "";
    showCurrentCard();
    timer.textContent = "elapsed time: " + timer_Value;
    setTime();
}
// button clears local storage
clear_Scores.onclick = function() {
    localStorage.removeItem("puntos");
    location.reload();
    return false;
}
// button returns to start screen from finish screen
load_Start.onclick = function() {
    location.reload();
    return false;
}
// sees if button content matches answer key
card_Div.addEventListener("click", function(event) {
    var choice = event.target.textContent;
    // increments score if correct, decrements in incorrect
    if (choice == answers[card_Num][5]) {
        score++;
        timer_Value += 10;
    } else {
        timer_Value -= 20;
    }
    // increments card counter after each answer
    if (card_Num < answers.length) {
        card_Num++;
    } 
    // initialize ending screen after last card
    if (card_Num == answers.length) {
        ending();
    }
    // load next card if not at last question
    if (card_Num < (answers.length)) {
        showCurrentCard();
    }
})

// QUIZ TIMER
// ________________________________________________________________________________________________________________

// starts timer when user starts quiz
function setTime() {
    var timerInterval = setInterval(function() {
        timer_Value--;
        timer.textContent = "elapsed time: " + timer_Value;
        if (card_Num == (answers.length)) {
            clearInterval(timerInterval);
            timer.textContent = "";
        }
    }, 1000);
}

// RENDER QUIZ CARDS
// ________________________________________________________________________________________________________________

// display current set of questions incrememnts on user selection
function showCurrentCard() {
    // clears card content from previous question
    while (card_Div.firstChild) {
        card_Div.removeChild(card_Div.lastChild);
    }    
    // create div and button for one question runs after every question answer
    var boo = [];
    for (i=0; i < 5; i++) {
        // create div for question
        if (i == 0) {
            boo[i] = document.createElement("div");
            boo[i].textContent = answers[card_Num][i];
            card_Div.appendChild(boo[i]);
        // create buttons for answers
        } else {
            boo[i] = document.createElement("button");
            boo[i].className += "btn1";
            boo[i].textContent = answers[card_Num][i];
            card_Div.appendChild(boo[i]);
        }
    }    
}

// DISPLAY FINAL SCORE AND LOGGED SCORES
// ________________________________________________________________________________________________________________

final_Score = "";
// display final score
// clear score elements and update score
function ending() {
    // unhide final screen buttons and scores
    punt.style.display = "block";
    load_Start.style.display = "block";
    score_Form.style.display = "block";
    // hide card_Div
    card_Div.textContent = "";
    // create and display final score
    var final_Score = document.createElement("div");
    final_Score.textContent = "final score: " + timer_Value;
    card_Div.appendChild(final_Score);
}

// SAVE FINAL SCORE STRING TO LOCAL STORAGE, RENDER EXISTING SCORES ON PAGE LOAD
// ________________________________________________________________________________________________________________

// load storage if browser just opened
init();

// render scores to screen for start and finish screens
function renderScores() {
    // clear score_List
    score_List.textContent = "";
    
    // render new li for each score
    for (i=0; i < puntos.length; i++) {
        var list_Hold = puntos[i];
        var li = document.createElement("li");
        li.textContent = list_Hold;
        score_List.appendChild(li);
    }
}
function init() {
    // parse JSON string to object
    var stored_Scores = JSON.parse(localStorage.getItem("puntos"));

    // if todos were retrieved from localStorage, update scores array
    if (stored_Scores !== null) {
        puntos = stored_Scores;
    }
    // render scores to DOM
    renderScores();
}
function storeScores() {
    // stringify and set puntos key in localStorage to puntos array
    localStorage.setItem("puntos", JSON.stringify(puntos));
}
// on input submit
score_Form.addEventListener("submit", function(event) {
    event.preventDefault();
    var pHold = init_Input.value + ": " + (timer_Value + 1);

    // return if init_Score is empty
    if (pHold === "") {
        return;
    }
    // add new pHold to puntos array, clear the input
    puntos.push(pHold);
    init_Input.value = "";

    // store updated puntos in localStorage, re-render list of scores
    storeScores();
    renderScores();
})
