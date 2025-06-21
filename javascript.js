let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
            let num = Math.floor(Math.random() * 3);
            switch(num){
                case 0: return "rock";
                case 1: return "paper";
                case 2: return "scissors";
            }
     }


function playRound(hchoice, cchoice){
        if (humanScore === 5 || computerScore === 5){
             if (humanScore === 5) {
               winner.textContent = "YOU ARE THE WINNERRRR!";
                } else{
                    winner.textContent = "COMPUTER wins!";
                }
            return;
        } 
        
        const choice = document.querySelector(".choice")
        const computer = document.querySelector(".computer")
        computer.textContent = "Computer chose " + cchoice;
        if (hchoice === cchoice) {
            choice.textContent = "Its a TIE!";
        } else if (hchoice === "rock" && cchoice === "paper"){
            choice.textContent = "You lose! Computer wins!";
            computerScore++;
        } else if (hchoice === "scissors" && cchoice === "rock"){
            choice.textContent= "You lose! Computer wins!";
            computerScore++;
        }else if (hchoice === "paper" && cchoice === "scissors"){
            choice.textContent = "You lose! Computer wins!";
            computerScore++;
        } else if (hchoice === "scissors" && cchoice === "paper"){
            choice.textContent= "You win! Computer lose!";
            humanScore++;
        } else if (hchoice === "rock" && cchoice === "scissors"){
            choice.textContent ="You win! Computer lose!";
            humanScore++;
        }else if(hchoice === "paper" && cchoice === "rock") {
            choice.textContent= "You win! Computer lose!";
            humanScore++;
        }
        const runningScore = document.querySelector(".runningScore");
        const hres = document.querySelector(".hres");
        const cres = document.querySelector(".cres");

        hres.textContent = "Your result: " + humanScore;
        cres.textContent = "Computer result: " + computerScore;
}

const rock = document.getElementById('btn1');
const paper = document.getElementById('btn2');
const scissors = document.getElementById('btn3');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

const winner = document.querySelector(".winner");






