let array = []
let str = "";
let player =1;
for (let i=0;i<10;i++){
    array[i]=[];
    str+="<tr>";
    for (let j=0;j<10;j++){
        str += "<td id='"+i+"-"+j+"' onclick='playE(this)'>"+"*"+"</td>";
        array[i][j]=""
    }
    str+="</tr>"
}
document.getElementById("boardgame").innerHTML = str;
function playE(e){
    let idofE=e.getAttribute("id");
    let myarray = idofE.split("-");
    if (document.getElementById(idofE).textContent=="*"){
        if (player==1){
            document.getElementById(idofE).innerHTML="X";
            array[myarray[0]][myarray[1]]="X";
            player=2;
        }
        else{
            document.getElementById(idofE).innerHTML="O";
            array[myarray[0]][myarray[1]]="O"
            player=1;
        }}else {
        alert("moi nhap lai");
    }
    checkWin()

}
function checkWin() {
    for (let x = 0; x < 10; x++) {
        for (let y = 1; y < 9; y++) {
            if (array[x][y - 1] == "X" &&
                array[x][y] == "X" &&
                array[x][y + 1] == "X") {
                if(array[x][y - 2] != "O"&&
                    array[x][y +2] != "O"){
                alert("X chien thang");
                break;}
            } else if (
                array[x][y - 1] == "O" &&
                array[x][y] == "O" &&
                array[x][y + 1] == "O") {
                if(array[x][y - 2] != "X"&&
                    array[x][y +2] != "X"){
                    alert("O chien thang");
                    break;}
            }
        }
    }
    for (let y = 0; y < 10; y++) {
        for (let x = 1; x < 9; x++) {
            if (array[x - 1][y] == "X" &&
                array[x][y] == "X" &&
                array[x + 1][y] == "X") {
                if(array[x-2][y] != "O"&&
                    array[x+2][y] != "O"){
                    alert("X chien thang");
                    break;}
            } else if (
                array[x - 1][y] == "O" &&
                array[x][y] == "O" &&
                array[x + 1][y] == "O") {
                if(array[x-2][y] != "X"&&
                    array[x+2][y] != "X"){
                    alert("O chien thang");
                    break;}
            }

        }

    }
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            if (array[x - 1][y-1] == "X" &&
                array[x][y] == "X" &&
                array[x + 1][y+1] == "X") {
                if(array[x-2][y-2] != "O"&&
                    array[x+2][y+2] != "O"){
                    alert("X chien thang");
                    break;}
            } else if (
                array[x - 1][y-1] == "O" &&
                array[x][y] == "O" &&
                array[x + 1][y+1] == "O") {
                if(array[x-2][y-2] != "X"&&
                    array[x+2][y+2] != "X"){
                    alert("O chien thang");
                    break;}}


        }

    }
    for (let x = 1; x < 9; x++) {
        for (let y = 1; y < 9; y++) {
            if (array[x - 1][10-y] == "X" &&
                array[x][9-y] == "X" &&
                array[x + 1][8-y] == "X") {
                if(array[x-2][11-y] != "O"&&
                    array[x+2][7-y] != "O"){
                    alert("X chien thang");
                    break;}

            } else if (
                array[x - 1][10-x] == "O" &&
                array[x][9-y] == "O" &&
                array[x + 1][8-y] == "O") {
                // if(array[x-2][9-y] != "X"&&
                //     array[x+2][9-y] != "X"){
                    alert("O chien thang");
                    break;}

        }

    }
}