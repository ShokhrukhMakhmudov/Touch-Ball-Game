var b = document.querySelector(".start");
var btn2 = document.querySelector(".hide-reload");
var exit = document.querySelector(".exitBtn");
var score = document.querySelector(".score");
var info = document.querySelector(".menu");
var count = 0;
let getTime = Date.now();

score.textContent = localStorage?.getItem("record") || 0;
b.onclick = function () {
  if (count === 0) {
    setInterval(function () {
      b.style.transform =
        "translate(" +
        (Math.floor(Math.random() * 100) - 50) +
        "vw," +
        (Math.floor(Math.random() * 100) - 50) +
        "vh)";
    }, 1075);

    exit.classList.add("hidden");
    info.classList.add("hidden");
  }
  count++;
  document.querySelector("h3").innerHTML = count;
  setInterval(function checkTime() {
    let gameTime = Date.now() - getTime;
    if (gameTime > 4000) {
      result = document.querySelector("h3");
      result.innerHTML = "You Lose";
      b.classList.add("hide-ball");
      btn2.classList.remove("hide-reload");
      btn2.classList.add("show-reload");

      if (count > Number(score.textContent)) {
        localStorage.setItem("record", count);
        score.textContent = count;
      }
    }
  }, 4000);
  getTime = Date.now();
};

btn2.addEventListener("click", () => location.reload());
