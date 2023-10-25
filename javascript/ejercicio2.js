let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = prompt("Enter the first player choice: ");
let secondPlayerChoice = prompt("Enter the second player choice: ");

//posibilidades de que gane el jugador 1
let firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
let thirdPossibility = firstPlayerChoice === paper && secondplayerChoice === rock;

//posibilidades de que gane el jugador 2
let fourthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock;
let fifthPossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors;
let sixthPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;

//posibilidades de empate
let seventhPossibility = firstPlayerChoice === rock && secondPlayerChoice === rock || firstPlayerChoice === scissors && secondPlayerChoice === scissors || firstPlayerChoice === paper && secondPlayerChoice === paper;

if (firstPossibility || secondPossibility || thirdPossibility) {
    console.log(`The first player wins!`);
}
else if(fourthPossibility || fifthPossibility || sixthPossibility) {
    console.log(`The second player wins!`);
}
else if(seventhPossibility) {
    console.log(`It's a tie!`);
}
else (console.log(`Invalid choice!`));
