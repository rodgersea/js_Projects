
// the four variables below are the four banks of characters to pull from
var lower = "abcdefghijklmnopqrstuvwxyz"
lower = lower.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upper = upper.split("");
var numeric = "0123456789";
numeric = numeric.split("");
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
special = special.split("");

// array of four pools
var poolSet = [lower, upper, numeric, special];

// ask the user which of the four character types to pool from
// concatenate variable called choose with the boolean values
generate.onclick = function() {

    // choose will hold the boolean values one to four
    var choose = [];

    // user selects four string types
    // concat booleans
    var one = confirm("include lowercase?");
    choose = choose.concat(one);
    var two = confirm("include uppercase?");
    choose = choose.concat(two);
    var three = confirm("include numeric?");
    choose = choose.concat(three);
    var four = confirm("include special?");
    choose = choose.concat(four);

    // user selects char length if select cancel: terminate
    // if selcect num out of range, repeatedly scold until cancel or proper value
    var five = prompt("how long? 8-128 characters");
    while ((five < 8) || (five > 128)) {
        if (five === null) {
            return;
        } else {
        alert("number must be between 8-128");
        five = prompt("how long? 8-128 characters");
        }
    }

    // concat array for password pool
    var pool = [];
    for (i=0; i < choose.length; i++) {
        if (choose[i] == true) {
            pool = pool.concat(poolSet[i]);
        }
    }

    // make empty password array to hold final password
    var passwerd = "";

    // create passwerd, loop through pool passwerd length of times
    for (i=0; i < five; i++) {
        a = Math.floor(Math.random() * pool.length);
        passwerd += pool[a];
    }
    
    // replace div w/id password with passw"e"rd :P
    document.getElementById("password").innerHTML = passwerd;
}
