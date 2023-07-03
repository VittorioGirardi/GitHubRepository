Backend App Web: gestione degli utenti con file json e comandi curl

- Creo il progetto node.js tramite il comando npm init o npm init -y
- Installo le dipendenze:
 > - npm install express
 > - npm install body-parser
 > - npm install jsonwebtoken

- Creo users.json , contenente i dati degli utenti (username, password)
- Creo server.js:
> - Aggiungo le dipendenze (require express, body-parser, ./users.json, jsonwebtoken)
> - app.post() prende username e password dalla pagina di login (./login)
> - users.users.find() cerca l'utente con username e password all'interno del file JSON
> - se l'utente è presente nel file JSON gli viene assegnato un token per il login
> - la funzione di autenticazione controlla che il token inserito sia corretto per permettere il login
> - app.listen() crea una connsessione sulla porta 3000