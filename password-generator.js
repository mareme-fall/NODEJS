// Ce programme génère un mot de passe aléatoire

// Importe le module generate-password
const generatePassword = require('generate-password');

// Génère un mot de passe aléatoire avec 10 caractères et des chiffres
const password = generatePassword.generate({
    length: 10,
    numbers: true
});

// Affiche le mot de passe généré dans la console
console.log("Generated Password:", password);
