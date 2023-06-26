const input = document.getElementById("input"); // input è un oggetto HTML element (HTMLInputElement)
const btnAggiungi = document.getElementById("aggiungi"); // btnAggiungi è un oggetto HTML element (HTMLButtonElement)
const lista = document.getElementById("lista"); // lista è un oggetto HTML element (HTMLUListElement)

btnAggiungi.addEventListener("click", function() {
  const elemento = document.createElement("li"); // elemento è un oggetto HTML element (HTMLLIElement)
  elemento.textContent = input.value; // textContent è una proprietà dell'oggetto HTML element
  lista.appendChild(elemento); // appendChild è un metodo dell'oggetto HTML element
  input.value = ""; // value è una proprietà dell'oggetto HTML element
});