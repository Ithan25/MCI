// Configuration EmailJS pour Mon Coach Informatique
//
// INSTRUCTIONS POUR CONFIGURER EMAILJS :
//
// 1. Allez sur https://www.emailjs.com/ et créez un compte gratuit
// 2. Dans le tableau de bord, créez un nouveau service email :
//    - Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
//    - Configurez avec votre adresse contact@moncoachinformatique.fr
// 3. Créez un template d'email avec ces variables :
//    - {{from_name}} : Nom de l'expéditeur
//    - {{from_email}} : Email de l'expéditeur
//    - {{phone}} : Téléphone
//    - {{subject}} : Sujet du message
//    - {{message}} : Corps du message
//    - {{to_email}} : Email de destination (contact@moncoachinformatique.fr)
// 4. Récupérez vos IDs et remplacez les valeurs ci-dessous :

export const emailConfig = {
  serviceId: "service_lz96mh9", // Remplacez par votre Service ID
  templateId: "template_guohcwe", // Remplacez par votre Template ID
  publicKey: "HsRu6LSfcJC6xJFsG", // Remplacez par votre Public Key
};

// Exemple de template d'email pour EmailJS :
/*
Bonjour,

Vous avez reçu un nouveau message depuis votre site web :

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Sujet : {{subject}}

Message :
{{message}}

Cordialement,
Système de contact Mon Coach Informatique
*/
