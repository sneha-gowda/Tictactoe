let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let c = 0;
// console.log(arr[1][0])
let previous = "O";
const game=document.querySelector("div");
const gameArea = document.createElement("div");
gameArea.id="gameBoard";
for (var i = 0; i < 3; i++) {
    const rowdiv = document.createElement("div");
    for (var j = 0; j < 3; j++) {
        const div = document.createElement("div");
        div.classList.add("box");
        div.id = i + "" + j;
        rowdiv.appendChild(div);
        rowdiv.classList.add("row");
    }
    gameArea.appendChild(rowdiv);
}
game.appendChild(gameArea);
gameArea.addEventListener("click", function (event) {
    // console.log(previous);
    index = event.target.id
    const boxNum = document.getElementById(index);
    // console.log(boxNum);
    if (boxNum != null) {
        if (previous === "O") {
            boxNum.innerText = "X";
            boxNum.style.color = "red";
            arr[index[0]][index[1]] = 1;
            previous = "X";

        }
        else {
            arr[index[0]][index[1]] = 4;
            boxNum.innerText = "O";
            boxNum.style.color = "blue";
            previous = "O";
        }
        boxNum.classList.add("decorate");
        boxNum.id = "";
        checkWin(index, previous);
    }
    function checkWin(index, present) {
        flag = 3;
        c += 1;
        let win = 0;
        if (present == "O") {
            flag = 12
        }
        if (arr[0][0] + arr[0][1] + arr[0][2] === flag || arr[1][0] + arr[1][1] + arr[1][2] === flag || arr[2][0] + arr[2][1] + arr[2][2] === flag) {
            win = 1;
        }
        else if (arr[0][0] + arr[1][0] + arr[2][0] === flag || arr[0][1] + arr[1][1] + arr[2][1] === flag || arr[0][2] + arr[1][2] + arr[2][2] === flag) {
            win = 1;
        }
        else if (arr[0][0] + arr[1][1] + arr[2][2] === flag || arr[2][0] + arr[1][1] + arr[0][2] === flag) {
        }
        if (win == 1 || c == 9) {
            let str = present + " has won";
            if (c == 9 && win != 1) {
                str = "Cats game!";
            }
            setTimeout(function () {
                alert(str);
                console.log("gfgfjh");
                arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
                const squares=document.querySelectorAll(".box");
                console.log
                let i=0,j=0;
                for(prop of squares){
                    prop.innerText="";
                    prop.id=i+""+j
                    j+=1;
                    if(j==3){
                        i+=1;j=0;
                    }
                }
                c=0;
                previous="O";
            }, 200);
        }


    }
});