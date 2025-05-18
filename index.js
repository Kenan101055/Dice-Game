let press = document.querySelector("#presstostart")
let h1= document.querySelector("#h1")
let game = document.querySelector("#game")
press.addEventListener("click",()=>{
    press.style.display = "none";
    game.style.display = "flex";
    h1.style.display = "none";
})
let activePlayer = 1;
let throw_dice = document.querySelector("#throw_dice");
let diceresult1 = document.querySelector("#dice_result");
let diceresult2 = document.querySelector("#dice_result2");

throw_dice.addEventListener('click', () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;

    if (activePlayer === 1) {
        diceresult1.innerText = `Player 1's Dice Result is ${diceValue}`;
    } else {
        diceresult2.innerText = `Player 2's Dice Result is ${diceValue}`;
    }

    if (diceValue === 6) {
        alert(`Wow Player ${activePlayer}! You got Lucky! Roll again.`);
    } else if (diceValue === 1) {
        alert(`Player ${activePlayer}, next time better luck! Other Player's Turn`);
        activePlayer = activePlayer === 1 ? 2 : 1;
    } else {
        alert(`You rolled ${diceValue}, Player ${activePlayer}! Other PLayer's Turn`);
        activePlayer = activePlayer === 1 ? 2 : 1;
    }
});
