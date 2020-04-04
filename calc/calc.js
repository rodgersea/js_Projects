var buttons = [];
var clik = "";
clear = document.querySelector("#clear");
maths = document.querySelector("#maths");
result_Div = document.querySelector("#result-cont");
buttons = document.querySelectorAll(".bute");
console.log(buttons);
for (i=0; i < (buttons.length - 1); i++) {
    buttons[i].addEventListener("click", function() {
        clik = event.target.textContent;
        result_Div.textContent += clik;
    })
}
math_String = "";
buttons[15].addEventListener("click", function() {
    math_String = result_Div;
    console.log(eval(math_String.textContent));
    maths.textContent = eval(math_String.textContent);
})
clear.addEventListener("click", function() {
    location.reload();
})
