
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
    var choose = [];

    var one = confirm("include lowercase?");
    if (one == false) {
        return;
    }
    choose = choose.concat(one);
    var two = confirm("include uppercase?");
    if (two == false) {
        return;
    }
    choose = choose.concat(two);
    var three = confirm("include numeric?");
    if (three == false) {
        return;
    }
    choose = choose.concat(three);
    var four = confirm("include special?");
    if (four == false) {
        return;
    }
    choose = choose.concat(four);

    var five = prompt("how long? 8-128 characters");
    if (five === null) {
        return;
    } else if ((five < 8) || (five > 128)) {
        alert("number must be between 8-128");
        five = prompt("how long? 8-128 characters");
    }
    
    // console.log(five);
    // console.log(choose);

// create array of characters to make password
    var pool = [];
    for (i=0; i < choose.length; i++) {
        if (choose[i] == true) {
            pool = pool.concat(poolSet[i]);
        }
    }
    console.log(pool);
// turn string pool to array pool

// make empty password string
var passwerd = [];  
// console.log(pool[0]);
// create passwerd, loop through pool passwerd length of times
    for (i=0; i < five; i++) {
        a = Math.floor(Math.random() * pool.length);
        passwerd = passwerd.concat(pool[a]);
    }
    var noCommas = passwerd.join("");
    console.log(passwerd);
    console.log(noCommas);

    
    document.getElementById("noCommas").innerHTML = noCommas;
}
