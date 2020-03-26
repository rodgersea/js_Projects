addEventListener("keydown", function() {
    if (event.keyCode == 13)
        document.getElementById("calc").click();
})

calc.onclick = function tipper() {
    var bill1 = document.getElementById("bill-start").value;
    var tip1 = document.getElementById("tip-start").value;

// maintains peeps = 1 unless user gives other input
    var check = document.getElementById("pepe").value;
    if (check == "" || check == null || check == 0) {
        var peeps = 1;
    } else {
        var peeps = document.getElementById("pepe").value;    
    }
    
    var tip2 = (tip1 / 100);
    var billtote = parseFloat(bill1 * tip2) + parseFloat(bill1);
    var billtotenew = (billtote / peeps);
    console.log(billtotenew);
    console.log(typeof billtotenew);
    if (isNaN(billtotenew)) {
        return;
    } else {
    document.getElementById("bill-total").innerHTML = billtotenew;
    }
}