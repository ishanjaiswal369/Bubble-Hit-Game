var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 152; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerval);
      document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

makeBubble();
runTimer();
getNewHit();

document.querySelector("#pbtm").addEventListener("click", function (details){
  var clickedno = Number(details.target.textContent);
  if (hitrn == clickedno) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
