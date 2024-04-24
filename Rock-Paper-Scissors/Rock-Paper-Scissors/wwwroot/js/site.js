// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.





let selectedType = "";
let gameRecords = [];
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

    const enemyPick = type[index];
    const playerPick = selectedType;

    document.getElementById("OpponentHand").innerHTML = enemyPick;
    document.getElementById("OpponentHandImage").src = `../imgs/${imgType[index]}`;

    let resultMessage = "";
    let winner = "";

    if (enemyPick === playerPick) {
        resultMessage = "Tie!";
        winner = "Tie";
    } else if (
        (enemyPick === "Rock" && playerPick === "Scissor") ||
        (enemyPick === "Paper" && playerPick === "Rock") ||
        (enemyPick === "Scissor" && playerPick === "Paper")
    ) {
        resultMessage = "Enemy Wins!";
        winner = "Enemy";
        ePoint++;
    } else {
        resultMessage = "Player Wins!";
        winner = "Player";
        pPoint++;
    }

    // Update the game records
    gameRecords.push({
        round: gameRecords.length + 1,
        playerPick,
        enemyPick,
        winner,
    });

    document.getElementById("GameStatus").innerHTML = resultMessage;

    if (ePoint === 5 || pPoint === 5) {
        // Pass the gameRecords to the GameOver page via query parameter
        const queryParams = new URLSearchParams({ records: JSON.stringify(gameRecords) });
        window.location.href = `GameOver?${queryParams.toString()}`;
    }

    document.getElementById("EnemyPoint").innerHTML = String(ePoint);
    document.getElementById("PlayerPoint").innerHTML = String(pPoint);

    var OpponentImage = document.getElementById("OpponentHandImage");
    OpponentImage.width = 120;
    OpponentImage.height = 120;
}
