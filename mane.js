const fs = require('fs'); // Importe le module fs (système de fichiers) de Node.js

// Contenu à écrire dans le fichier
const content = 'Hello Node';

// Chemin du fichier à créer
const filePath = 'welcome.txt';

// Écriture du contenu dans le fichier
fs.writeFile(filePath, content, err => {
  if (err) {
    console.error('Erreur lors de la création du fichier :', err);
    return;
  }
  console.log('Le fichier a été créé avec succès.');
});
