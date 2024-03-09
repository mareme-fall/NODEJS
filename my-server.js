// Ce programme crée un serveur HTTP qui répond avec "<h1>Hello Node!!!!</h1>\n" sur le port 3000

// Importe le module http de Node.js
const http = require('http');

// Crée un serveur HTTP qui écoute sur le port 3000
const server = http.createServer((req, res) => {
    // Définit l'en-tête de la réponse HTTP avec le type de contenu HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Envoie la réponse avec le texte HTML "<h1>Hello Node!!!!</h1>"
    res.end('<h1>HELLO WORLD!!!!</h1>\n');
});

// Démarre le serveur et affiche un message dans la console indiquant qu'il écoute sur le port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
