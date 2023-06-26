const timer = document.getElementById("timer");
const btnAvvia = document.getElementById("avvia");
const btnFerma = document.getElementById("ferma");
const btnAzzera = document.getElementById("azzera");
let intervallo;
let secondi = 0;
let minuti = 0;

function avviaTimer() {
  intervallo = setInterval(function() {
    secondi++;
    if (secondi === 60) {
      minuti++;
      secondi = 0;
    }
    const minutiFormattati = minuti < 10 ? "0" + minuti : minuti;
    const secondiFormattati = secondi < 10 ? "0" + secondi : secondi;
    timer.textContent = `${minutiFormattati}:${secondiFormattati}`;
  }, 1000);
}

function fermaTimer() {
  clearInterval(intervallo);
}

function azzeraTimer() {
  clearInterval(intervallo);
  secondi = 0;
  minuti = 0;
  timer.textContent = "00:00";
}

btnAvvia.addEventListener("click", function() {
  avviaTimer();
});

btnFerma.addEventListener("click", function() {
  fermaTimer();
});

btnAzzera.addEventListener("click", function() {
  azzeraTimer();
});