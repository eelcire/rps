let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("userscore");
const computerscore_span = document.getElementById("compscore");
const score = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");
const restart = document.getElementById("restart");

function main() {
    rock_button.addEventListener("click", function () {
        game("r");
    })
    paper_button.addEventListener("click", function () {
        game("p");
    })
    scissors_button.addEventListener("click", function () {
        game("s");
    })
    restart.addEventListener("click", function() {
        userScore = 0;
        computerScore = 0;
        result_div.innerHTML = `Time to start a new game!`
        userscore_span.innerHTML = userScore;
        computerscore_span.innerHTML = computerScore;
    })
}

function convert(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convert(userChoice)} loses to ${convert(computerChoice)}. You lose...`;
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${convert(userChoice)} is equal to ${convert(computerChoice)}. Draw~`;
}

function game(userChoice) {
    const computerChoice = computerPlay();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function computerPlay() {
    const choices = ["r","p","s"]
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}
main();