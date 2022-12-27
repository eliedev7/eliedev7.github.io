let scores, roundScore, activePlayer, gaming;

init();

// ROLL button
document.querySelector("#roll-the-dice").addEventListener("click", function () {
    if (gaming) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "./img/die-" + dice + ".svg";

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.getElementById(
                "round-" + activePlayer
            ).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
            alert("Désolé vous avez tapé le nombre 1, vous passez votre tour !");
        }
    }
});



// HOLD button
document.querySelector("#take-a-turn").addEventListener("click", function () {
    if (gaming) {
        // Add round score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.dispaly = "none";

            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");

            gaming = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.getElementById("round-0").textContent = 0;
    document.getElementById("round-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

// NEW-GAME button
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    // Reseting score vars
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gaming = true;

    document.querySelector(".dice").style.display = "none";
    // Reseting allscores
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("round-0").textContent = "0";
    document.getElementById("round-1").textContent = "0";
    // Reseting Player Names
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    // Removing classes from panels
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
