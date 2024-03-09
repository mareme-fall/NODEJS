// Ce programme envoie un e-mail en utilisant le module nodemailer

// Importe le module nodemailer
const nodemailer = require('nodemailer');

// Crée un transporteur SMTP pour l'envoi d'e-mails
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre_email@gmail.com', // Remplacez par votre adresse e-mail
        pass: 'votre_mot_de_passe' // Remplacez par votre mot de passe
    }
});

// Définit les options de l'e-mail à envoyer
let mailOptions = {
    from: 'votre_email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Test Node.js Email',
    text: 'Ceci est un e-mail de test envoyé depuis Node.js'
};

// Envoie l'e-mail avec les options spécifiées
transporter.sendMail(mailOptions, function (error, info) {
    // Gère les erreurs potentielles
    if (error) {
        console.error(error);
    } else {
        // Affiche un message dans la console indiquant que l'e-mail a été envoyé avec succès
        console.log('Email envoyé: ' + info.response);
    }
});
