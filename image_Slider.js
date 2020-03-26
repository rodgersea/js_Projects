
const imgAr = [
    "spicy_Nooder/181028_010.jpg",
    "spicy_Nooder/181028_011.jpg",
    "spicy_Nooder/181028_012.jpg",
    "spicy_Nooder/181028_013.jpg",
    "spicy_Nooder/181028_015.jpg"
];

let counter = 0;

function right() {
    if (counter <= 3) {
        counter ++;
        document.getElementById("img_Disp").src = imgAr[counter];
    } else {
        counter = 0;
        document.getElementById("img_Disp").src = imgAr[counter];
    }
}
    
function left() {
    if (counter >= 1) {
        counter --;
        document.getElementById("img_Disp").src = imgAr[counter];
    } else {
        counter = 4;
        document.getElementById("img_Disp").src = imgAr[counter];
    }
}



