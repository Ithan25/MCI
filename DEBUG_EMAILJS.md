# 🚨 Diagnostic rapide - Erreur EmailJS

## Votre configuration actuelle

- Service ID: `service_lz96mh9` ✅
- Template ID: `template_guohcwe` ✅
- Public Key: `HsRu6LSfcJC6xJFsG` ✅

## ✅ Étapes de diagnostic

### 1. Vérifiez votre service EmailJS

1. Allez sur https://dashboard.emailjs.com/admin
2. Cliquez sur votre service `service_lz96mh9`
3. **Vérifiez qu'il est ACTIF** (pas en pause)
4. **Testez la connexion** avec le bouton "Test Connection"

### 2. Vérifiez votre template EmailJS

1. Allez dans "Email Templates"
2. Cliquez sur `template_guohcwe`
3. **Vérifiez que ces variables sont présentes** :
   ```
   {{from_name}}
   {{from_email}}
   {{phone}}
   {{subject}}
   {{message}}
   ```

### 3. Configuration SMTP Ionos

Dans votre service EmailJS, vérifiez ces paramètres :

**Pour Custom Service:**

```
SMTP Server: smtp.ionos.fr
Port: 587
Security: STARTTLS
Username: contact@moncoachinformatique.fr
Password: [votre_mot_de_passe]
```

**OU pour Outlook/Exchange:**

```
Type: Outlook
Puis suivre l'auth OAuth avec votre compte Microsoft lié à Ionos
```

### 4. Test immédiat

1. Ouvrez votre navigateur
2. Appuyez sur F12 → Console
3. Rechargez votre site
4. Essayez d'envoyer un message
5. **Regardez les erreurs dans la console**

### 5. Erreurs courantes

**"Template not found"** → Template supprimé ou ID incorrect
**"Service not found"** → Service supprimé ou ID incorrect  
**"Authentication failed"** → Mot de passe email incorrect
**"SMTP connection failed"** → Paramètres SMTP Ionos incorrects
**"Invalid public key"** → Copiez/collez mal la clé

### 6. Test rapide avec curl

Ouvrez PowerShell et testez votre email Ionos :

```powershell
# Test de connexion SMTP
telnet smtp.ionos.fr 587
```

## 🔧 Solutions rapides

### Si le service ne fonctionne pas :

1. **Recréez le service** avec "Custom Service"
2. Utilisez **EXACTEMENT** ces paramètres Ionos
3. **Testez d'abord** avec un client email (Outlook/Thunderbird)

### Si le template ne fonctionne pas :

1. **Recréez le template**
2. Copiez ce contenu exact :

```
Subject: 📩 {{subject}} - {{from_name}}

Bonjour,

Nouveau message depuis votre site :

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

Message :
{{message}}

Cordialement,
Votre site web
```

### Test en urgence :

Si rien ne fonctionne, modifiez temporairement le code pour utiliser uniquement `mailto:` :

Dans `Contact.jsx`, commentez tout le bloc EmailJS et gardez seulement :

```javascript
const subject = encodeURIComponent(
  formData.subject || "Contact depuis le site web"
);
const body = encodeURIComponent(
  `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\n\nMessage :\n${formData.message}`
);
window.location.href = `mailto:contact@moncoachinformatique.fr?subject=${subject}&body=${body}`;
```

## 📞 Besoin d'aide ?

Envoyez-moi les erreurs exactes de la console du navigateur.
