var body = document.body;
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var el1 = document.createElement("h1");
var el2 = document.createElement("h2");

el1.textContent = secondsLeft;

body.appendChild(el1);
body.appendChild(el2);

var secondsLeft = 2;

function prepareRead() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    el1.textContent = secondsLeft + " seconds left untill speed read";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
      speedRead();
    }
  }, 1000);
}

var secs = 0;

poem2 = poem.split(" ");

function speedRead() {
  console.log(poem2);
  var timeyTime = setInterval(function() {
    el2.textContent = poem2[secs];
    secs++;

    if(secs === poem2.length) {
      el2.textContent = "";
    }
  }, 1000);  
}

prepareRead();