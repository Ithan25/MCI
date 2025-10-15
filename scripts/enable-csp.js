import fs from "fs";
import path from "path";

// Script pour configurer correctement la CSP en production
const htmlPath = path.join(process.cwd(), "dist", "index.html");

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, "utf8");

  // CSP optimisée pour EmailJS
  const cspContent = `default-src 'self'; connect-src 'self' https://api.emailjs.com https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:;`;

  // Rechercher et remplacer ou ajouter la CSP
  if (html.includes('http-equiv="Content-Security-Policy"')) {
    // Remplacer la CSP existante
    html = html.replace(
      /http-equiv="Content-Security-Policy"\s+content="[^"]*"/g,
      `http-equiv="Content-Security-Policy" content="${cspContent}"`
    );
  } else {
    // Ajouter la CSP si elle n'existe pas
    const metaVp =
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    const cspMeta = `    <meta http-equiv="Content-Security-Policy" content="${cspContent}" />`;
    html = html.replace(metaVp, metaVp + "\n" + cspMeta);
  }

  // Correction spéciale : si la CSP s'est retrouvée dans le viewport, la corriger
  html = html.replace(
    /name="viewport" content="[^"]*default-src[^"]*"/g,
    'name="viewport" content="width=device-width, initial-scale=1.0"'
  );

  fs.writeFileSync(htmlPath, html);
  console.log("✅ CSP correctement configurée pour EmailJS en production");
} else {
  console.log("⚠️ Fichier HTML de production non trouvé");
}
