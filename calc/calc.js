var buttons = [];
var carat = document.querySelector("#carat");
var clik = "";
math_String = "";
var exp_String = "";
var exp = "Math.pow(";
var exp_end = ")";
clear = document.querySelector("#clear");
maths = document.querySelector("#maths");
result_Div = document.querySelector("#result-cont");
buttons = document.querySelectorAll(".bute");
console.log(buttons);
var one = "";

for (i=0; i < (buttons.length - 1); i++) {
    buttons[i].addEventListener("click", function() {
        clik = event.target.textContent;
        result_Div.textContent += clik;
        one += clik;
        console.log(one);
    })
}

buttons[15].addEventListener("click", function() {
    math_String = result_Div;
    console.log(eval(math_String.textContent));
    maths.textContent = eval(math_String.textContent);
})

var new_Result = "";
var new_Result1 = "";
var two = "";
clikk = "";
carat.addEventListener("click", function() {
    result_Div.textContent += "^";
    exp_String = "Math.pow(" + one;
    exp_String += ", "
    console.log(exp_String);
    clikk = "";
    
    for (i=0; i < (buttons.length - 1); i++) {
        buttons[i].addEventListener("click", function() {
            result_Div = "";
            clikk = event.target.textContent;
            result_Div.textContent += clikk;
            console.log("rest: " + result_Div.textContent);
            two += clikk;
            console.log("two: " + two);
            exp_String += two + ")";
            console.log("exp: " + exp_String);
        })
    }
    buttons[15].addEventListener("click", function() {
        var math_String = eval(exp_String);
        console.log(math_String);
        maths.textContent = math_String;
    })

})
console.log("test " + Math.pow(3, 3));
clear.addEventListener("click", function() {
    location.reload();
})
