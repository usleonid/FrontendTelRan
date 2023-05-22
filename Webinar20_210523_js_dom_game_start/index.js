const $startBtn = document.querySelector("#start");
const $gameDiv = document.querySelector("#game");
const $timeSpan = document.querySelector("#time");

$startBtn.addEventListener("click", startGame);
$gameDiv.addEventListener("click", handlerBoxClick)

var score = 0
var isGameStarted = false;

function startGame() {
  hide($startBtn);
  isGameStarted = true;
  $gameDiv.style.backgroundColor = "#fff";
  $timeSpan.textContent = document.getElementById('game-time').value

  const interval = setInterval(() => {
    let time = parseFloat($timeSpan.textContent);
    time = (time - 0.1).toFixed(1);
    if (time <= 0) {
        clearInterval(interval);
        endGame();
    }
    $timeSpan.textContent = time;
  }, 100)

  renderBox()
}

function handlerBoxClick (event) {
    if (!isGameStarted) {
        return;
    }
    const target = event.target;
    if (!target.dataset.box) {
        return;
    }
    score++;
    renderBox();
}

function endGame() {
    isGameStarted = false;
    show($startBtn);
    $gameDiv.innerHTML = '';
    $gameDiv.style.backgroundColor = '#ccc';
    // $timeSpan.textContent = document.getElementById('game-time').value
    console.log($timeSpan.textContent);
}

function renderBox() {
    $gameDiv.innerHTML = '';
    const box = document.createElement('div');
    const boxSize = getRandom(30, 100);
    const gameSize = $gameDiv.getBoundingClientRect();
    const maxTop = gameSize.height - boxSize;
    const maxLeft = gameSize.width - boxSize;


    box.style.width = box.style.height = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', true);

    $gameDiv.insertAdjacentElement('afterbegin', box);
}

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}