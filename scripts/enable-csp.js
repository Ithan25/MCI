import fs from "fs";
import path from "path";

// Script pour configurer correctement la CSP en production
const htmlPath = path.join(process.cwd(), "dist", "index.html");

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, "utf8");

  // CSP temporairement désactivée pour debug des polices
  console.log("🔧 CSP désactivée temporairement pour debug des polices");
} else {
  console.log("⚠️ Fichier HTML de production non trouvé");
}
