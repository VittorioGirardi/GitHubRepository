const input = document.getElementById("input");
const btnAggiungi = document.getElementById("aggiungi");
const lista = document.getElementById("lista");
let elementiLista = []; // Le liste in JavaScript possono contenere dati di tipo diverso

btnAggiungi.addEventListener("click", function() {
  const elemento = input.value.trim();
  if (elemento !== "") {
    elementiLista.push(elemento); // Il metodo push consente di inserire un elemento
    aggiornaLista();
  }
  input.value = "";
});

function aggiornaLista() {
  lista.innerHTML = "";
  for (let i = 0; i < elementiLista.length; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = elementiLista[i];
    lista.appendChild(elemento);
  }
}