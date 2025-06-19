let humanScore = 0;
let computerScore = 0;

function playRound(hchoice, cchoice){
    if (hchoice === cchoice) {
        console.log("Its a TIE!");
    } else if (hchoice === "rock" && cchoice === "paper"){
        console.log("You lose! Computer wins!");
        computerScore++;
    } else if (hchoice === "scissors" && cchoice === "rock"){
        console.log("You lose! Computer wins!");
        computerScore++;
    }else if (hchoice === "paper" && cchoice === "scissors"){
        console.log("You lose! Computer wins!");
        computerScore++;
    } else if (hchoice === "scissors" && cchoice === "paper"){
        console.log("You win! Computer lose!");
        humanScore++;
    } else if (hchoice === "rock" && cchoice === "scissors"){
        console.log("You win! Computer lose!");
        humanScore++;
    }else if(hchoice === "paper" && cchoice === "rock") {
        console.log("You win! Computer lose!");
        humanScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        function getHumanChoice(){
            let choice = prompt("Enter choice: ");
            let res = choice.toLowerCase();
            return res;
        }
        let hchoice = getHumanChoice();
        console.log(`Your choice: ${hchoice}`);


        function getComputerChoice(){
            let num = Math.floor(Math.random() * 3);
            switch(num){
                case 0: return "rock";
                case 1: return "paper";
                case 2: return "scissors";
            }
        }
        let cchoice = getComputerChoice();

        console.log(`Computer choice: ${cchoice}`);
        playRound(hchoice, cchoice);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You WIN!!!!");
    } else {
        console.log("You LOST!!!");
    }
}

playGame();


