const contatore = document.getElementById("contatore"); // contatore è un oggetto HTML element (HTMLParagraphElement)
const btnAumenta = document.getElementById("aumenta"); // btnAumenta è un oggetto HTML element (HTMLButtonElement)  
const btnAzzera = document.getElementById("azzera"); // btnAzzera è un oggetto HTML element (HTMLButtonElement)
const btnLucky = document.getElementById("lucky"); // btnAzzera è un oggetto HTML element (HTMLButtonElement)

let valoreContatore = 0;  // valoreContatore è una variabile di tipo number si usa let per dichiarare variabili di tipo number e string

btnAumenta.addEventListener("click", function() {
  valoreContatore++; // valoreContatore = valoreContatore + 1;
  contatore.textContent = valoreContatore; // textContent è una proprietà dell'oggetto HTML element
});

btnAzzera.addEventListener("click", function() {
  valoreContatore = 0; // valoreContatore = valoreContatore + 1;
  contatore.textContent = valoreContatore; // textContent è una proprietà dell'oggetto HTML element
});

btnLucky.addEventListener("click", function() {
    valoreContatore = 69; // valoreContatore = valoreContatore + 1;
    contatore.textContent = valoreContatore; // textContent è una proprietà dell'oggetto HTML element
  });