const rollBtn = document.getElementById("roll-btn")
const dicesCountEl = document.getElementById("dices-count");
const sideSelectionEl = document.getElementById("sides");
const rollsContainerEl = document.getElementById("rolls-container");
rollBtn.addEventListener("click", roll) 

function roll() {
  resetRollsContainer();
  const diceCount = dicesCountEl.value;
  for (let idx=0; idx<diceCount; idx++) {
    addRolledDice();
  }
}

function resetRollsContainer() {
  rollsContainerEl.innerHTML = "";
}
function addRolledDice() {
  const rolledDiceEl = document.createElement("div");
  rolledDiceEl.className = "roll";
  rolledDiceEl.innerHTML = getRandomRollValue();
  rollsContainerEl.appendChild(rolledDiceEl);
}

function getRandomRollValue() {
  const sides = sideSelectionEl.value
  return Math.floor(Math.random()* sides) + 1;
}