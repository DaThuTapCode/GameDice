document.addEventListener("DOMContentLoaded", function() {
    const rollBtn = document.getElementById("rollBtn");
    const scoreDisplay = document.getElementById("score");
    const dice = document.getElementById("dice");
  
    let score = 0;
  
    rollBtn.addEventListener("click", function() {
      const diceValue = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      score += diceValue;
      scoreDisplay.textContent = score;
  
      // Animate dice rolling
      dice.style.transform = "rotateX(720deg) rotateY(720deg) rotateZ(720deg)";
      setTimeout(() => {
        dice.src = `img/dice${diceValue}.png`;
        dice.style.transform = "none";
      }, 500);
    });
  });
  

 