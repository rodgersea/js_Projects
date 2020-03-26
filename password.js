

// the four variables below are the four banks of characters to pull from
var lower = "abcdefghijklmnopqrstuvwxyz"
lower = lower.split("");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upper = upper.split("");

var numeric = "0123456789";
numeric = numeric.split("");

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
special = special.split("");

// complete list of chars
var poolSet = [lower, upper, numeric, special];

// ask the user which of the four char types to pool from
// concatenate variable called choose using the returned boolean values
btn1.onclick = function() {
    var choose = [];

    var one = confirm("include lowercase?");
        choose = choose.concat(one);
    var two = confirm("include uppercase?");
        choose = choose.concat(two);
    var three = confirm("include numeric?");
        choose = choose.concat(three);
    var four = confirm("include special?");
        choose = choose.concat(four);

// find password length, require 8-128 with if else

var five = prompt("how long? 8-128 characters");
    do {
        alert("size limit 8-128");
        var five = prompt("how long? 8-128 characters");
    }
    while ((five < 8) || (five > 128)) 
    

    // var five = prompt("how long? 8-128 characters");
    // if ((five < 9) || (five > 128)) {
    //     alert("size limit 8-128");
    //     five = prompt("how long? 8-128 characters");
    // }
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
var x = "asdf";
console.log(x);
// console.log(pool[0]);
// create password, loop through pool password length of times
    for (i=0; i < five; i++) {
        a = Math.floor(Math.random() * pool.length);
        passwerd = passwerd.concat(pool[a]);
    }
    var noCommas = passwerd.join("");
    console.log(passwerd);
    console.log(noCommas);

    
    document.getElementById("password").innerHTML = noCommas;
}
