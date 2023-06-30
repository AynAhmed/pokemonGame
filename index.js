// Redirect to instructions page when "start game" button is clicked
function FirstPageClicked() {
  window.location.href = "info-page.html";
}

// Redirect to game page when "GO" button is clicked
function OnePlayerBtnClick() {
  window.location.href = "game.html";
}


//Creating all the dirt tiles
let container = document.getElementById("dirt-container");

for (let i = 0; i < 9; i++) {
  let dirtTile = document.createElement("div");
  dirtTile.className = "dirt-tile";
  dirtTile.id = "dirt-tile" + i;

  container.appendChild(dirtTile);
}

// Dirt container styling
container.style.padding = "15px";
container.style.paddingLeft = "20px";
container.style.paddingRight = "20px";
container.style.backgroundColor = "black";
container.style.borderRadius = "8px";
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";

let imgArr = [
  "flareon.png",
  "snivy.png",
  "mudkip.gif",
  "wartortle.png",
  "nidoqueen.gif",
  "charizard.png",
  "charmander.png",
  "eevee.png",
  "jigglypuff.png",
  "leafon.png",
  "pikachu.png",
  "sawbuck.png",
  "seel.png",
  "snorlax.png",
  "squirtle.png",
  "umbreon.png",
];



let currentMoleIndex;
let secondMoleIndex;
let moleInterval;
let secondMoleInterval;


function setMole() {
  if (currentMoleIndex !== undefined) {
    let currentMoleTile = document.getElementById("dirt-tile" + currentMoleIndex);
    currentMoleTile.innerHTML = "";
  }

  let randomTileIndex;

  // Keeps generating a new tile number until it's not equal to the current one
  do {
    randomTileIndex = Math.floor(Math.random() * 9);
  } while (randomTileIndex === currentMoleIndex);

  let moleTile = document.getElementById("dirt-tile" + randomTileIndex);

  let randomImage = imgArr[Math.floor(Math.random() * imgArr.length)];

  let moleImage = document.createElement("img");
  moleImage.src = randomImage;
  moleImage.className = "mole-image";

  moleImage.style.width = "200px";
  moleImage.style.height = "200px";
  moleImage.style.objectFit = "contain";

  moleTile.appendChild(moleImage);

  currentMoleIndex = randomTileIndex;

  setTimeout(setSecondMole, 500);
}

function setSecondMole() {
  if (secondMoleIndex !== undefined) {
    let secondMoleTile = document.getElementById("dirt-tile" + secondMoleIndex);
    secondMoleTile.innerHTML = "";
  }

  let randomTileIndex;
  do {
    randomTileIndex = Math.floor(Math.random() * 9);
  } while (randomTileIndex === currentMoleIndex);

  let moleTile = document.getElementById("dirt-tile" + randomTileIndex);

  let randomImage = imgArr[Math.floor(Math.random() * imgArr.length)];

  let moleImage = document.createElement("img");
  moleImage.src = randomImage;
  moleImage.className = "mole-image";

  moleImage.style.width = "200px";
  moleImage.style.height = "200px";
  moleImage.style.objectFit = "contain";

  moleTile.appendChild(moleImage);

  secondMoleIndex = randomTileIndex;
}


function startGame() {
  let startBtn = document.getElementById("Str-game-btn");
  startBtn.style.display = "none";

  let timerElement = document.getElementById("timer");
  let countDown = 20;
  timerElement.textContent = countDown;
  
  let caughtNum = 0;
  let caughtElement = document.getElementById("caughtNum");
  caughtElement.innerHTML = 0;
  
  let dirtContainer = document.getElementById("dirt-container");
  
  dirtContainer.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("mole-image")) {
  caughtNum += 1;
  caughtElement.innerHTML = caughtNum;
  
  }

  

  });

  

  
  let timerInterval = setInterval(function () {
  countDown--;
  timerElement.textContent = countDown;
 if (countDown <= 0) {
  clearInterval(timerInterval);
  timerElement.textContent = "Times up!";

  startBtn.style.display = "block";
  stopGame();
  }
  }, 1000);
  
  moleInterval = setInterval(function () {
  setMole();
  }, 1000);
  
  secondMoleInterval = setInterval(function () {
  setSecondMole();
  }, 1000);
  
  setMole();
  setSecondMole();
  }
  
  function stopGame() {
  clearInterval(moleInterval);
  clearInterval(secondMoleInterval);
   ////////////////////////////
  
  if (currentMoleIndex !== undefined) {
  let moleTile = document.getElementById("dirt-tile" + currentMoleIndex);
  if (moleTile !== null) {
  moleTile.innerHTML = "";
  }
  currentMoleIndex = undefined;
  }
  
  if (secondMoleIndex !== undefined) {
  let secondMoleTile = document.getElementById("dirt-tile" + secondMoleIndex);
  if (secondMoleTile !== null) {
  secondMoleTile.innerHTML = "";
  }
  secondMoleIndex = undefined;
  }
  }
  
  function startTimer() {
  let timerElement = document.getElementById("timer");
  let countDown = 20;
  timerElement.textContent = countDown;
  
  let timerInterval = setInterval(function () {
  countDown--;
  timerElement.textContent = countDown;
  if (countDown <= 0) {
  clearInterval(timerInterval);
  timerElement.textContent = "Times up!";
  let startBtn = document.getElementById("Str-game-btn");
  startBtn.style.display = "block";
  stopGame();
  }
  }, 1000);
  }
  
  let startBtn = document.getElementById("Str-game-btn");
  startBtn.addEventListener("click", function () {
  startGame();
  startTimer();
  });
