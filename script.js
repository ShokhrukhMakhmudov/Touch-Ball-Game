var b = document.querySelector(".start");
var btn2 = document.querySelector(".hide-reload");
var exit = document.querySelector(".exitBtn");
var count = 0;
let getTime = Date.now();

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
    }
  }, 4000);
  getTime = Date.now();
};

btn2.addEventListener("click", () => location.reload());
