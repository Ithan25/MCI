# Configuration EmailJS avec Ionos - Mon Coach Informatique

## 📧 Configuration spécifique Ionos

### Étape 1 : Préparer votre email Ionos

1. **Vérifiez que votre email `contact@moncoachinformatique.fr` est actif**
2. **Notez le mot de passe de votre email**
3. **Activez IMAP/SMTP dans votre interface Ionos si nécessaire**

### Étape 2 : Créer le service EmailJS

1. **Allez sur https://www.emailjs.com/**
2. **Créez un compte avec votre email professionnel**
3. **Dans le dashboard, cliquez "Add New Service"**
4. **Choisissez une des options suivantes :**

#### Option A : Custom Service (SMTP) - Recommandée

```
Service Type: Custom Service
SMTP Server: smtp.ionos.fr
Port: 587
Security: STARTTLS
Username: contact@moncoachinformatique.fr
Password: [votre_mot_de_passe]
From Name: Mon Coach Informatique
From Email: contact@moncoachinformatique.fr
```

#### Option B : Outlook (si configuré)

- Si vous utilisez Outlook avec votre domaine Ionos
- Choisissez "Outlook" et suivez l'authentification OAuth

### Étape 3 : Créer le template d'email

1. **Allez dans "Email Templates" → "Create New Template"**
2. **Configurez le template :**

```
Template Name: Contact Form MCI
Subject: 📩 Nouveau message de {{from_name}} - {{subject}}

Content:
Bonjour,

Vous avez reçu un nouveau message depuis votre site web Mon Coach Informatique :

👤 Nom complet : {{from_name}}
📧 Email : {{from_email}}
📞 Téléphone : {{phone}}
📝 Sujet : {{subject}}

💬 Message :
{{message}}

---
Ce message a été envoyé automatiquement depuis le formulaire de contact de votre site web.

Cordialement,
Système de contact Mon Coach Informatique
```

### Étape 4 : Récupérer les identifiants

1. **Service ID** : Visible dans la liste des services (ex: service_xyz123)
2. **Template ID** : Visible dans la liste des templates (ex: template_abc456)
3. **Public Key** : Account → General → Public Key

### Étape 5 : Mettre à jour la configuration

Modifiez `src/config/emailjs.js` :

```javascript
export const emailConfig = {
  serviceId: "service_xyz123", // Votre Service ID
  templateId: "template_abc456", // Votre Template ID
  publicKey: "votre_public_key", // Votre Public Key
};
```

## 🔧 Paramètres SMTP Ionos (pour référence)

```
Serveur SMTP entrant (IMAP): imap.ionos.fr
Port IMAP: 993 (SSL) ou 143 (STARTTLS)

Serveur SMTP sortant: smtp.ionos.fr
Port SMTP: 587 (STARTTLS) ou 465 (SSL)
Authentification: Oui
```

## ✅ Test de configuration

1. **Redémarrez votre serveur de développement**
2. **Testez le formulaire avec vos vraies données**
3. **Vérifiez la réception dans contact@moncoachinformatique.fr**

## 🚨 Dépannage courant

### Erreur d'authentification :

- Vérifiez le mot de passe de votre email
- Assurez-vous que l'IMAP/SMTP est activé chez Ionos
- Testez vos paramètres dans un client email d'abord

### Email non reçu :

- Vérifiez vos spams/indésirables
- Assurez-vous que le template contient {{to_email}} si nécessaire
- Vérifiez les limites EmailJS (100 emails/mois en gratuit)

### Erreur CORS :

- Ajoutez votre domaine dans les paramètres EmailJS
- Pour localhost, aucune configuration supplémentaire nécessaire

## 📞 Support Ionos

Si vous avez des difficultés avec les paramètres SMTP :

- Interface Ionos → Email → Paramètres → Configuration client email
- Support Ionos : 09 70 80 89 41
