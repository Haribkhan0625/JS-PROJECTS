// possible errors:
// 1. "turnOf0"
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnOfo = true; //playerX, playerO
let count = 0; //To track Draw

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnOfo = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked"); NOTE : (THIS WAS EXTRA)
        // box.innerHTML = turnOf0 ? "X" : "O";
        // turn0 = !turn0;
        if (turnOfo) {    //playerO
            box.innerHTML = "O";
            box.classList.add("O");
            turnOfo = false;
        } else {    //playerX
            box.innerHTML = "X";
            box.classList.add("X");
            turnOfo = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }

        // checkWinner();
    })
});

const gameDraw = () => {
    msg.innerText = "DRAW \nB/W \n'X' AND 'O'";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is '${Winner}'`;
    msgContainer.classList.remove("hide");//when the winner will win the hide class from the msgContainer will be removed by using classList.remove()
    disableBoxes();
}
const checkWinner = () => {
  for(let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val!= "" && pos3Val != "") {
      if(pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val); NOTE : (THIS WAS EXTRA)
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
