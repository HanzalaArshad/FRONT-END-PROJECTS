let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpoints=document.querySelector("#user-score");
const comppoints=document.querySelector("#comp-score");


const drawGame = () => {
    console.log("Draw");
    msg.innerText ="DRAW PLAY AGAIN";
    msg.style.backgroundColor="blue";

}

const showWinner = (userwin,choiceId,compChoice) => {
    if (userwin) {
        userScore++;

        userpoints.innerText= userScore;
        msg.innerText =`YOU WON YOUR  ${choiceId} BEATS ${compChoice}`;
        msg.style.backgroundColor="green";
        } else {
        compScore++;
        comppoints.innerText= compScore;

        msg.innerText =`YOU LOSE ${compChoice} BEATS YOUR  ${choiceId}`;
        msg.style.backgroundColor="red";

    }
}

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (choiceId) => {

    const compChoice = gencompChoice();

    if (choiceId === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (choiceId === "rock") {
            if (compChoice === "paper") {
                userwin = false;
            }
        } else if (choiceId === "paper") {
            if (compChoice === "scissors") {
                userwin = false;
            }
        } else {
            if (compChoice === "rock") {
                userwin = false;
            }
        }
        showWinner(userwin,choiceId,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
