# Script PowerShell pour initialiser Git

Write-Host "🚀 Initialisation du repository Git pour le déploiement Vercel" -ForegroundColor Green

# Vérifier si Git est installé
try {
    git --version | Out-Null
    Write-Host "✅ Git détecté" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé. Veuillez l'installer d'abord." -ForegroundColor Red
    exit 1
}

# Initialiser le repository si ce n'est pas déjà fait
if (-not (Test-Path ".git")) {
    Write-Host "📝 Initialisation du repository Git..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Repository Git déjà initialisé" -ForegroundColor Green
}

# Créer .gitignore si il n'existe pas
if (-not (Test-Path ".gitignore")) {
    Write-Host "📝 Création du .gitignore..." -ForegroundColor Yellow
    @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Cache
.cache/
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
} else {
    Write-Host "✅ .gitignore déjà existant" -ForegroundColor Green
}

# Ajouter tous les fichiers
Write-Host "📦 Ajout des fichiers au staging..." -ForegroundColor Yellow
git add .

# Commit initial
Write-Host "💾 Création du commit initial..." -ForegroundColor Yellow
git commit -m "🎉 Site Mon Coach Informatique - Prêt pour déploiement Vercel

✨ Fonctionnalités :
- Site vitrine responsive
- Formulaire de contact EmailJS + fallback mailto
- Animations Framer Motion
- Design moderne avec TailwindCSS
- Logo personnalisé intégré
- Configuration CSP optimisée
- Prêt pour HTTPS et domaine personnalisé"

Write-Host ""
Write-Host "🎉 Repository Git initialisé avec succès !" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "1. Créer un repository sur GitHub" -ForegroundColor White
Write-Host "2. Ajouter l'origine remote : git remote add origin https://github.com/USERNAME/REPO.git" -ForegroundColor White
Write-Host "3. Pousser le code : git push -u origin main" -ForegroundColor White
Write-Host "4. Connecter à Vercel pour le déploiement" -ForegroundColor White
Write-Host ""
Write-Host "📖 Consultez DEPLOYMENT-GUIDE.md pour les instructions détaillées" -ForegroundColor Yellow