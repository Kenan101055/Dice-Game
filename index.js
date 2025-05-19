let press = document.querySelector("#container");
let h1 = document.querySelector("#h1");
let game = document.querySelector("#game");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let points1 = document.querySelector("#points1");
let points2 = document.querySelector("#points2");
let throw_dice = document.querySelector("#throw_dice");
let diceresult1 = document.querySelector("#dice_result");
let diceresult2 = document.querySelector("#dice_result2");
let score1 = 0;
let score2 = 0;
let activePlayer = 1;
press.addEventListener("click", () => {
    press.style.display = "none";
    game.style.display = "flex";
    h1.style.display = "none";
    points1.innerText = "Points: 0";
    points2.innerText = "Points: 0";
});
throw_dice.addEventListener('click', () => {
    let diceValue = Math.floor(Math.random() * 6) + 1;

    if (activePlayer === 1) {
        diceresult1.innerText = `Player 1's Dice Result is ${diceValue}`;
    } else {
        diceresult2.innerText = `Player 2's Dice Result is ${diceValue}`;
    }

    if (diceValue === 6) {
        alert(`Wow Player ${activePlayer}! You got Lucky! Roll again.`);
        if (activePlayer === 1) {
            score1++;
            points1.innerText = `Points: ${score1}`;
        } else {
            score2++;
            points2.innerText = `Points: ${score2}`;
        }
    } else if (diceValue === 1) {
        alert(`Player ${activePlayer}, next time better luck! Other Player's Turn`);
        activePlayer = activePlayer === 1 ? 2 : 1;
    } else {
        alert(`You rolled ${diceValue}, Player ${activePlayer}! Other Player's Turn`);
        activePlayer = activePlayer === 1 ? 2 : 1;
    }
    if (score1 == 10) {
        alert("Player 1 wins!")
        window.location.reload()
    }
    if (score2 == 10) {
        alert("Player 2 wins!")
        window.location.reload()
    }
});
