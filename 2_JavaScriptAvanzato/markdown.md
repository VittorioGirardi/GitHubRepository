> ## initPrimoProgetto:
- Importo il modulo Express come condizione necessaria per l'esecuzione dello script.
- Creo una costante a cui assegno Express.
- Utilizzo il metodo get sul percorso '/' per inviare la risposta 'Ciao, mondo!' al browser.
- Utilizzo l metodo listen per avviare il server sulla porta 3000.

> ## initHttp:
- Importo il modulo http come condizione necessaria per l'esecuzione dello script.
- Creo una costante a cui associo l'oggetto http e il medoto createServer.
- Creo le condizioni in cui specifico il percorso, il tipo di contenuto ed il messaggio restituito dalla view.

> ## FS:
- Istanzio l'oggetto fs come condizione necessaria per l'esecuzione dello script.
- Utilizzo il medoto readFile per leggere il contenuto del file txt.
- Gestisco le eccezioni istanziando err come argomento della funzione di scrittura.
- Utilizzo console.log(data.toString()) per stampare nel terminale il contenuto del file txt sotto forma di stringa.

> ## FS-write:
- Istanzio l'oggetto fs come condizione necessaria per l'esecuzione dello script.
- Utilizzo il medoto writeFile per leggere il contenuto del file txt.
- Gestisco le eccezioni istanziando err come argomento della funzione di scrittura.
- Utilizzo console.log(data.toString()) per stampare nel terminale il contenuto del file txt sotto forma di stringa.

> ## Comandi utilizzati:
- npm init
- npm init -y
- npm install express
- npm install http
- npm install fs
- node file.js
