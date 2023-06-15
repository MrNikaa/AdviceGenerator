const rollButton = document.querySelector(".roll-button");
const adviceNumber = document.querySelector(".advice-number");
const adviceDisplay = document.querySelector(".quote");
const diceImage = document.querySelector("#dice-image");

rollButton.addEventListener("click", async () => 
{
    const response = await axios.get(`https://api.adviceslip.com/advice`);
    let adviceText = response.data.slip.advice;
    let adviceNum = response.data.slip.id;
    diceImage.classList.add('dice-animation');
    adviceNumber.innerText = `ADVICE #${adviceNum}`;
    adviceDisplay.innerText = adviceText;
});

// Remove the animation class after the animation ends
diceImage.addEventListener('animationend', function() {
    diceImage.classList.remove('dice-animation');
  });