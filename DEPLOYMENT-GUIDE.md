# 🚀 Guide de déploiement Vercel + Domaine IONOS

## Étape 1: Initialiser Git et pousser sur GitHub

```bash
# Dans le dossier de votre projet
git init
git add .
git commit -m "Site Mon Coach Informatique prêt pour déploiement"

# Créer un repo sur GitHub puis :
git remote add origin https://github.com/VOTRE_USERNAME/mon-coach-informatique.git
git branch -M main
git push -u origin main
```

## Étape 2: Déployer sur Vercel

1. **Allez sur [vercel.com](https://vercel.com)**
2. **Connectez-vous avec votre compte GitHub**
3. **Cliquez sur "New Project"**
4. **Sélectionnez votre repository "mon-coach-informatique"**
5. **Vercel détectera automatiquement que c'est un projet Vite**
6. **Cliquez sur "Deploy"**

## Étape 3: Configurer le domaine personnalisé

### Dans Vercel :

1. **Allez dans votre projet → Settings → Domains**
2. **Ajoutez votre domaine : `moncoachinformatique.fr`**
3. **Vercel vous donnera des enregistrements DNS à configurer**

### Dans IONOS :

1. **Connectez-vous à votre espace client IONOS**
2. **Allez dans "Domaines" → "moncoachinformatique.fr"**
3. **Cliquez sur "Gérer le DNS" ou "Sous-domaines/DNS"**
4. **Configurez les enregistrements fournis par Vercel :**

```
Type: A
Nom: @
Valeur: 76.76.19.61 (IP fournie par Vercel)

Type: CNAME
Nom: www
Valeur: cname.vercel-dns.com (fourni par Vercel)
```

## Étape 4: Activer HTTPS (automatique)

- **Vercel active automatiquement HTTPS avec Let's Encrypt**
- **Votre site sera accessible sur `https://moncoachinformatique.fr`**
- **EmailJS fonctionnera parfaitement !**

## Étape 5: Test final

1. **Attendez 5-10 minutes pour la propagation DNS**
2. **Allez sur `https://moncoachinformatique.fr`**
3. **Testez le formulaire de contact**
4. **EmailJS devrait fonctionner directement !**

## 📧 Configuration EmailJS pour le domaine

Dans votre tableau de bord EmailJS, ajoutez le domaine :

- `https://moncoachinformatique.fr`
- `https://www.moncoachinformatique.fr`

## 🔄 Mises à jour futures

Pour mettre à jour le site :

```bash
git add .
git commit -m "Mise à jour du site"
git push
```

Vercel se chargera automatiquement du redéploiement !
