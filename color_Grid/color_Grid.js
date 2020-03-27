const bodyCont = document.getElementById("container");

storeXY.onclick = function() {
// store user input for grid dimensions
    var xDim = document.getElementById("col-Num").value;
    var yDim = document.getElementById("row-Num").value;

    // calculate number of cells total
    var gridFull = xDim * yDim;
    // create empty grid
    var gridAr = [];

    // calculate % width of each column
    var colWid = (100 / xDim).toFixed(2);

    // row parents are the divs that hold the rows
    var rowParents = [];

    // starting string for the setAttribute DOM
    var colString = "margin: 0; padding: 0; border: 0; display: grid; height: 500px; width: 500px; grid-template-columns: ";

        // create set of x equal columns
        for(i=0; i < xDim; i++) {
            colString += colWid.toString() + "% ";
            rowParents[i] = document.createElement("div");
            rowParents[i].id = "div" + [i];
            bodyCont.appendChild(rowParents[i]);               
        }

        var rowDiv = [];
        // create array of future row elements
        for(i=0; i < gridFull; i++) {
            rowDiv[i] = document.createElement("div");
            rowDiv[i].id = "rowdy" + [i];
        }

        // chunk rowDiv into "xDim" amount of columns
        var chunk_Ar = [];
        var current = [];
        var j = 0;
        function chunk(one, two) {
            for (i=0; i <= gridFull; i++) {
                if (current.length < two) {
                    current = current.concat(one[i]);
                }
                else {
                    chunk_Ar[j] = current;
                    current = [];
                    j++;
                    i--;
                }
            }
        }

        // array called divy holds xDim amount of div[0-xDim]
        var divy = [];
        for(i=0; i < xDim; i++) {
            divy[i] = document.getElementById("div" + [i]);
        }
        
        // call function on our variables
        chunk(rowDiv, xDim);

        // append cells to columns
        for(i=0; i < xDim; i++) {
            for(j=0; j < xDim; j++){
                divy[i].appendChild(chunk_Ar[i][j]);
            }            
        }

    // set .container column widths equal to each other and to xDim
    bodyCont.setAttribute("style", colString);
    
    // give each cell a random background color
    var pool = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var myHex = '#';
    for(i=0; i < gridFull; i++) {

        for (j=0; j<6; j++){
            var randPool = Math.floor(Math.random() * pool.length);
            myHex += pool[randPool];
        }
        var style = "background-color: " + myHex + "; ";
        style += "height: " + colWid + "%;";

        document.getElementById("rowdy" + [i]).setAttribute("style", style);
        console.log(myHex);
        myHex = "#";
    }
    console.log(style);
}