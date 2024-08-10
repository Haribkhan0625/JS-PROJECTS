let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); /*randIdx is being used to access the elements in the array as we know that it cant be done with strings in an array so we will create an randIdx using Math function which will assign the value to the array elements*/
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was 'Draw!'";
    msg.style.backgroundColor = "#081b31";

}

showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your '${userChoice}' beats computer's '${compChoice}'`;
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose! Computers '${compChoice}' beats your '${userChoice}'`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            //paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoiceId);
    playGame(userChoice);
  });
});
