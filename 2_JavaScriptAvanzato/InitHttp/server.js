const http = require('http'); // Import dell'url richiesta per eseguire lo script

const server = http.createServer((req, res) => { // Creazione del server (richiesta e risposta)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Benvenuto nella mia applicazione!'); // Messaggio restituito nella view
} else if (req.url === '/about') { // View About
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Questa è la pagina About!');

} else if (req.url === '/test') { // View Test
                res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
                res.end('Test!');
} else {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // View Not Found
    res.end('Pagina non trovata!');
}
});


server.listen(3000, () => { // Funzione listen per avviare il sever sulla porta 3000
    console.log('Il server è in ascolto sulla porta 3000!');
});