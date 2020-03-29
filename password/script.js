
// password script
// activated by single button on index.html

// the four variables below are the four character types to pull from
var lower = "abcdefghijklmnopqrstuvwxyz"
lower = lower.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upper = upper.split("");
var numeric = "0123456789";
numeric = numeric.split("");
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
special = special.split("");

// ask the user which of the four character types to pool from
// concatenate variable called choose with the boolean values
generate.onclick = function() {

    // user selects four string types
    // concat booleans
    var choose = [];
    var one = confirm("include lowercase?");
    choose = choose.concat(one);
    var two = confirm("include uppercase?");
    choose = choose.concat(two);
    var three = confirm("include numeric?");
    choose = choose.concat(three);
    var four = confirm("include special?");
    choose = choose.concat(four);

    // check to see if user selected 0 of the 4 pool choices
    var check = 0;
    for (i=0; i < 4; i++) {
        if (choose[i] === true) {
            check++;
        }
    }

    // if 0, alert "generate new with at least one selection"
    if (check == 0) {
        alert("generate password requires at least one selection");
        return;
    }    

    // select char length. if cancel, return
    // if selcect num out of range, scold until cancel or proper value
    var five = prompt("how long? 8-128 characters");
    while ((five < 8) || (five > 128)) {
        if (five === null) {
            return;
        } else {
        alert("number must be between 8-128");
        five = prompt("how long? 8-128 characters");
        }
    }

    // array of four pools for loop below
    var poolSet = [lower, upper, numeric, special];

    // concat empty array for password pool
    var pool = [];
    for (i=0; i < choose.length; i++) {
        if (choose[i] == true) {
            pool = pool.concat(poolSet[i]);
        }
    }

    // create passwerd, loop through pool (passwerd) length of times
    var passwerd = "";
    for (i=0; i < five; i++) {
        a = Math.floor(Math.random() * pool.length);
        passwerd += pool[a];
    }
    
    // replace "password" div with passw"e"rd :P
    document.getElementById("password").innerHTML = passwerd;
}
