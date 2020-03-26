function showInput() {
    var test = document.getElementById("user_Input").value;
    console.log(test);
    document.getElementById("display").innerHTML =
        document.getElementById("user_Input").value;
    document.getElementById("user_Input").value = "";
}