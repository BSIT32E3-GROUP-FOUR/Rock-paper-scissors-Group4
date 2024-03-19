// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

selectedType;

function RockOnClick(type) {
    switch (type) {
        case "Rock":
            selectedType = "Rock";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            break;
        case "Paper":
            selectedType = "Paper";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            break;
        case "Scissor":
            selectedType = "Scissor";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            break;
        default:
    }

    EnemyPick()
}

function EnemyPick() {
    index = Math.floor(Math.random() * 3);

    const type = ["Rock", "Paper", "Scissor"];

    result = type[index]
    document.getElementById("OpponentHand").innerHTML = result

    if (result === selectedType) {
        document.getElementById("GameStatus").innerHTML = "Tie!"
    }
    else if (result === "Rock" && selectedType === "Scissor") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!"
    }
    else if (result === "Rock" && selectedType === "Paper") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!"
    }
    else if (result === "Paper" && selectedType === "Scissor") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!"
    }
    else if (result === "Paper" && selectedType === "Rock") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!"
    }
    else if (result === "Scissor" && selectedType === "Rock") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!"
    }
    else if (result === "Scissor" && selectedType === "Paper") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!"
    }
}