function showInput() {
    var str = document.getElementById("user_Input").value;
    console.log(str);

    var strNum = str.split(" ").length;
    console.log(strNum);

    document.getElementById("word-count").innerHTML =
        strNum;
}

