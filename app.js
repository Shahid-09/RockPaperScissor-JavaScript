let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTowards(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(4).sub();
    const smallCompword = "comp".fontsize(4).sub();
    result_p.innerHTML = `${convertTowards(userChoice)} ${smallUserword} beats ${convertTowards(computerChoice)} ${smallCompword}. You win!`;
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "user".fontsize(4).sub();
    const smallCompword = "comp".fontsize(4).sub();
    result_p.innerHTML = `${convertTowards(userChoice)} ${smallUserword} losses to ${convertTowards(computerChoice)} ${smallCompword}. You lost..`;
}
function draw(userChoice, computerChoice) {
    const smallUserword = "user".fontsize(4).sub();
    const smallCompword = "comp".fontsize(4).sub();
    result_p.innerHTML = `${convertTowards(userChoice)} ${smallUserword} equal ${convertTowards(computerChoice)} ${smallCompword}. It's a draww..`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}

main();