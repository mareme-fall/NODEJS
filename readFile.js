// Ce programme lit le contenu du fichier "welcome.txt" et l'affiche dans la console

// Importe le module fs (système de fichiers) de Node.js
const fs = require('fs');

// Lit le contenu du fichier "welcome.txt" en utilisant la méthode fs.readFile()
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    // Gère les erreurs potentielles
    if (err) {
        console.error(err);
        return;
    }
    // Affiche le contenu du fichier dans la console
    console.log(data);
});
