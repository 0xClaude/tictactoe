//
// Starting variables
//

// Who is currenty playing
var currentPlayer = "X";

var xscore = [];
var oscore = [];

gameOver = false;
winner = "";

//
// Gameplay
//

// The next player is on
function nextPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

//
// Gameplay
//

// what happens on a click?
function checkClick() {
    let tiles = document.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", () => {
            if (!tiles[i].classList.contains("X") && !tiles[i].classList.contains("O")) {
                tiles[i].classList.remove("unassigned");
                tiles[i].classList.add(currentPlayer);
                tiles[i].innerHTML = currentPlayer;

                if (currentPlayer == "X") {
                    xscore.push(i + 1);
                } else {
                    oscore.push(i + 1);
                }

                gameChecker();
                nextPlayer();

            }
        });
    }
}


// who has won the game?
function gameChecker() {
    if (xscore.includes(1) && xscore.includes(2) && xscore.includes(3)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(4) && xscore.includes(5) && xscore.includes(6)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(7) && xscore.includes(8) && xscore.includes(9)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(1) && xscore.includes(4) && xscore.includes(7)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(2) && xscore.includes(5) && xscore.includes(8)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(3) && xscore.includes(6) && xscore.includes(9)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(1) && xscore.includes(5) && xscore.includes(9)) {
        gameOver = true;
        winner = "X";
    }
    else if (xscore.includes(3) && xscore.includes(5) && xscore.includes(7)) {
        gameOver = true;
        winner = "X";
    }
    else if (oscore.includes(1) && oscore.includes(2) && oscore.includes(3)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(4) && oscore.includes(5) && oscore.includes(6)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(7) && oscore.includes(8) && oscore.includes(9)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(1) && oscore.includes(4) && oscore.includes(7)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(2) && oscore.includes(5) && oscore.includes(8)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(3) && oscore.includes(6) && oscore.includes(9)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(1) && yscore.includes(5) && oscore.includes(9)) {
        gameOver = true;
        winner = "O";
    }
    else if (oscore.includes(3) && oscore.includes(5) && oscore.includes(7)) {
        gameOver = true;
        winner = "O";
    }
    else {
        gameOver = false;
    }

    if (gameOver) {
        let winningMessage = "Player " + winner + " has won the game!";
        document.querySelector("h1").innerHTML = winningMessage;
    }
}

checkClick();

// possible wins:
//
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// 1, 5, 9
// 3, 5, 7