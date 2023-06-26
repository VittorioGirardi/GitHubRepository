// Accedo agli ID del file index.html creando delle costanti

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const operazione = document.getElementById("operazione");
const btnCalcola = document.getElementById("calcola");
const risultato = document.getElementById("risultato");

// Uso il metodo addEventListener sulla costante di Calcolo
// Creo una funzione per associare dei valori agli input 

btnCalcola.addEventListener('click', function() {
  const numero1 = Number(input1.value);
  const numero2 = Number(input2.value);
  let risultatoOperazione;

  // Utilizzo switch/case per distiguere i vari tipi di operazione

  switch (operazione.value) {
    case "somma":
      risultatoOperazione = numero1 + numero2;
      break;
    case "sottrazione":
      risultatoOperazione = numero1 - numero2;
      break;
    case "moltiplicazione":
      risultatoOperazione = numero1 * numero2;
      break;
    case "divisione":
      risultatoOperazione = numero1 / numero2;
      break;
    default: // Imposto un valore di default nel caso in cui non venga eseguita alcuna operazione
      risultatoOperazione = "Operazione non valida";
  }

  risultato.textContent = `Il risultato dell'operazione è ${risultatoOperazione}`; // Concatenazione di stringhe per stampare a video il risultato
});