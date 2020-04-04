
// QUESTION BANK
// ________________________________________________________________________________________________________________

// correct answers in position [5]
var answers = [];
answers[0] = [
    "Inside which HTML element do we put the JavaScript?",
    "<javascript>",
    "<scripting>",
    "<script>",
    "<js>",
    "<script>"
];
answers[1] = [
    "How does a for loop start?",
    "for (i=0; i < 5; i++)",
    "for (i < 5; i++)",
    "for i = 1 to 5",
    "for (i=0, i < 5)",
    "for (i=0; i < 5; i++)"
];
answers[2] = [
    "Where is the correct place to insert a JavaScript?",
    "The <body> section",
    "The <head> section",
    "The <footer> section",
    "Both the <head> section and the <body> section are correct",
    "Both the <head> section and the <body> section are correct"
];
answers[3] = [
    "How do you write \"Hello World\" in an alert box?",
    "alert(\"Hello World\");",
    "alertBox(\"Hello World\");",
    "msgBox(\"Hello World\");",
    "msg(\"Hello World\");",
    "alert(\"Hello World\");"
];
answers[4] = [
    "How do you call a function named \"myFunction\"?",
    "call myFunction()",
    "call function myFunction()",
    "myFunction()",
    "function = myFunction()",
    "myFunction()"
];

// VARIABLE LIST
// ________________________________________________________________________________________________________________

// empty starting variables used during quiz
var choice = "";
var card_Num = 0;
var score = 0;
var score_Submit = 0;
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
// allow one submission display spidey meme
var get_One = document.querySelector("#get-one")
// add break
var brake_Class = document.querySelector(".brake");
// for adding breaks
var brake = document.createElement("BR");

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
    score_Submit = 0;
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

// QUIZ TIMER
// ________________________________________________________________________________________________________________

// starts timer when user starts quiz
function setTime() {
    var timerInterval = setInterval(function() {
        // prevent timer_value from going negative
        if (timer_Value > 0) {
            timer_Value--;
        }
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
    var button_List = [];
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
            boo[i].id = "divy";
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

// ONCLICK EVENT NESTED IN SHOWCURRENTCARD FUNCTION
// ________________________________________________________________________________________________________________

    // FOR EACH ANSWER BUTTON, CREATE ONCLICK EVENT TO CHECK IF CORRECT AND LOAD NEXT CARD
    button_List = document.querySelectorAll(".btn1");
    console.log("167 btn list: ");
    console.log(button_List);
    for (i=0; i < button_List.length; i++) {
        button_List[i].addEventListener("click", function() {
            var choice = event.target.textContent;
            // increments score if correct, decrements in incorrect
            // prevent timer_value from going negative
            if (choice == answers[card_Num][5]) {
                score++;
                timer_Value += 10;
            } else if (timer_Value > 19) {
                timer_Value -= 20;
            } else {
                timer_Value = 0;
            }
            if (card_Num < answers.length) {
                card_Num++;
            } 
            // initialize ending screen after last card
            if (card_Num == answers.length) {
                ending();
            }
            if (card_Num < (answers.length)) {
                showCurrentCard();
            }
        })
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
    final_Score.id = "final-score";
    final_Score.textContent = "final score: " + timer_Value;
    card_Div.appendChild(final_Score);
    brake_Class.appendChild(brake);
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

// ADDS SCORE AND INITIALS TO LIST ONLY ONCE, SCOLD WITH CHEEKY MEME
// ________________________________________________________________________________________________________________

// on input submit
score_Form.addEventListener("submit", function(event) {
    if (score_Submit == 0) {
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

        // add one to score_Submit to prevent multiple score submissions
        score_Submit++;
        console.log("scoresub: " + score_Submit);
    } else {
        event.preventDefault();
        get_One.src = "only_One.jpeg";
    }
})
