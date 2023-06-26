
const quadrato = document.getElementById("quadrato");
const btnCambiaColore = document.getElementById("cambia-colore");

btnCambiaColore.addEventListener("click", function() {
  const nuovoColore = generaColoreCasuale();
  quadrato.style.backgroundColor = nuovoColore;
});

function generaColoreCasuale() {
  const simboli = "0123456789ABCDEF";
  let colore = "#";
  for (let i = 0; i < 6; i++) {
    colore += simboli[Math.floor(Math.random() * 16)];
  }
  return colore;
}