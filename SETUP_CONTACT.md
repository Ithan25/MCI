# Configuration du formulaire de contact - Mon Coach Informatique

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS pour envoyer les messages directement à votre boîte email `contact@moncoachinformatique.fr`.

### Étapes de configuration :

1. **Créer un compte EmailJS**

   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit (100 emails/mois)

2. **Configurer le service email**

   - Dans le tableau de bord, cliquez sur "Add New Service"
   - Choisissez votre fournisseur (Gmail, Outlook, etc.)
   - Configurez avec votre email `contact@moncoachinformatique.fr`
   - Notez le **Service ID** généré

3. **Créer le template d'email**

   - Allez dans "Email Templates" → "Create New Template"
   - Utilisez ce contenu :

   ```
   Sujet: Nouveau message de {{from_name}} - {{subject}}

   Corps:
   Bonjour,

   Vous avez reçu un nouveau message depuis votre site web :

   👤 Nom : {{from_name}}
   📧 Email : {{from_email}}
   📞 Téléphone : {{phone}}
   📝 Sujet : {{subject}}

   💬 Message :
   {{message}}

   Cordialement,
   Système de contact Mon Coach Informatique
   ```

   - Notez le **Template ID** généré

4. **Récupérer la clé publique**

   - Allez dans "Account" → "General"
   - Copiez votre **Public Key**

5. **Mettre à jour la configuration**

   - Ouvrez `src/config/emailjs.js`
   - Remplacez les valeurs par vos vrais IDs :

   ```javascript
   export const emailConfig = {
     serviceId: "votre_service_id",
     templateId: "votre_template_id",
     publicKey: "votre_public_key",
   };
   ```

6. **Tester le formulaire**
   - Redémarrez le serveur de développement
   - Testez l'envoi d'un message via le formulaire

## 🔧 Alternative : mailto (solution simple)

Si vous préférez une solution plus simple sans configuration, le formulaire peut utiliser `mailto:` qui ouvrira le client email par défaut de l'utilisateur.

## 📝 Notes

- EmailJS gratuit : 100 emails/mois
- Les messages sont envoyés directement à votre boîte
- Pas besoin de serveur backend
- Fonctionne sur tous les navigateurs modernes
