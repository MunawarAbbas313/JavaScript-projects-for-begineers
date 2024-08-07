const boxes = document.querySelectorAll(".clk");
const resetBtn = document.querySelector(".rbtn");
const NewGameBtn = document.querySelector(".newgame");
const WinnerMsg = document.querySelector(".msg");
const val1 =document.querySelector(".Ocounter");
const val2 = document.querySelector(".Xcounter");

let counterX = 0;
let counterO = 0;

let PlayerTurnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (PlayerTurnO) {
            box.innerHTML = "O";
            PlayerTurnO = false;
        } else {
            box.innerHTML = "X";
            PlayerTurnO = true;
        }
        box.disabled = true;
        box.style.background = "black";
        checkWinner();
    });
});

function restGame()
{
    PlayerTurnO =true;
    enableBtns();
}

resetBtn.addEventListener("click",()=>{
    restGame();
})
NewGameBtn.addEventListener("click",()=>{
    restGame();
    NewGameBtn.style.display = "none";
    resetBtn.style.display = "flex";
})

const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.background = "";
        while (WinnerMsg.firstChild) {
            WinnerMsg.removeChild(WinnerMsg.firstChild);
        }
    }
}

function showMsg(winner) {
    const msg = document.createElement("p");
    msg.innerHTML = `${winner} Wins The Game!`;
    WinnerMsg.appendChild(msg);
    disableBtns();
    if(winner == "X"){
        counterX++;
        
         val2.innerText = ` Total Wins for X : ${counterX}`
    }
    else
    {
        counterO++;
        val1.innerText = ` Total Wins for O : ${counterO}`
    }
}

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(`${pos1}: wins`);
                NewGameBtn.style.display = "flex";
                resetBtn.style.display = "none";
                showMsg(pos1);
                
                break;
            }
        }
    }
}
