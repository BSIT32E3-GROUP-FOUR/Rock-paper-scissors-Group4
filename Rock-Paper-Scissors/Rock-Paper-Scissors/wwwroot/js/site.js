// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





let selectedType = "";

var playerImage = document.getElementById("PlayerHandImage");

playerImage.width = 120;
playerImage.height = 120;


function RockOnClick(type) {
    switch (type) {
        case "Rock":
            selectedType = "Rock";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            document.getElementById("PlayerHandImage").src = "../imgs/RockTT.png";
            break;
        case "Paper":
            selectedType = "Paper";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            document.getElementById("PlayerHandImage").src = "../imgs/PaperT.png";
            break;
        case "Scissor":
            selectedType = "Scissor";
            document.getElementById("PlayerHand").innerHTML = selectedType;
            document.getElementById("PlayerHandImage").src = "../imgs/ScissorT.png";
            break;
        default:
    }

    EnemyPick()
}

let pPoint = 0;
let ePoint = 0;



function EnemyPick() {
    index = Math.floor(Math.random() * 3);

    const type = ["Rock", "Paper", "Scissor"];
    const imgType = ["RockTT.png", "PaperT.png", "ScissorT.png"];

    result = type[index]
    document.getElementById("OpponentHand").innerHTML = result
    document.getElementById("OpponentHandImage").src = `../imgs/${imgType[index]}`;

    if (result === selectedType) {
        document.getElementById("GameStatus").innerHTML = "Tie!";
    }
    else if (result === "Rock" && selectedType === "Scissor") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!";
        ePoint++;
    }
    else if (result === "Rock" && selectedType === "Paper") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!";
        pPoint++;
    }
    else if (result === "Paper" && selectedType === "Scissor") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!";
        pPoint++;
    }
    else if (result === "Paper" && selectedType === "Rock") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!";
        ePoint++;
    }
    else if (result === "Scissor" && selectedType === "Rock") {
        document.getElementById("GameStatus").innerHTML = "Player Wins!";
        pPoint++;
    }
    else if (result === "Scissor" && selectedType === "Paper") {
        document.getElementById("GameStatus").innerHTML = "Enemy Wins!";
        ePoint++;
    }

    if (ePoint === 3 || pPoint === 3) {
        window.location.href = "GameOver";
    }

    document.getElementById("EnemyPoint").innerHTML = String(ePoint);
    document.getElementById("PlayerPoint").innerHTML = String(pPoint);

    var OpponentImage = document.getElementById("OpponentHandImage");

    OpponentImage.width = 120; 
    OpponentImage.height = 120;
}