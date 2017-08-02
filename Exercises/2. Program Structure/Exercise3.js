// Exercise 3


var size = 8;
var board = "";
for(conty = 0; conty < size; conty++){
    for(contx = 0; contx < size; contx++){
        if((contx + conty) %2 != 0)
            board += "#";
        else
            board += " ";
    }
    board += "\n";
}
console.log(board);