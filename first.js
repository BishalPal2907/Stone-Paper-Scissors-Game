let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScoreVal = document.querySelector("#userscore");
const compScoreVal = document.querySelector("#compscore");

const generate = () => {
    let options = ["rock","paper","scissors"];
    const RandomIdx = Math.floor(Math.random()*3);
    return options[RandomIdx];
}

const DrawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor="black";
}

const ShowWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScoreVal.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor="green";
    }   
     else {
        compScore++;
        compScoreVal.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    const compChoice = generate();
    if(userChoice===compChoice)
    {
        DrawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }

        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }

        else {
            userWin = compChoice === "rock" ? false : true;
        }

        ShowWinner(userWin);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})