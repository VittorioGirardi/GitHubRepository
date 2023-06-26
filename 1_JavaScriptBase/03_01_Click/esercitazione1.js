const btn = document.getElementById("btn"); // btn è un oggetto HTML element (HTMLButtonElement)
const testo = document.getElementById("testo"); // testo è un oggetto HTML element (HTMLParagraphElement)

btn.addEventListener("click", function() {
  testo.textContent = "Hai cliccato sul bottone!"; // textContent è una proprietà dell'oggetto HTML element
});