// Test de diagnostic EmailJS
// Ouvrez ce fichier dans votre navigateur pour tester votre configuration

console.log("🔍 Diagnostic EmailJS pour Mon Coach Informatique");

// Configuration actuelle
const config = {
  serviceId: "service_lz96mh9",
  templateId: "template_guohcwe",
  publicKey: "HsRu6LSfcJC6xJFsG",
};

console.log("📋 Configuration détectée:", config);

// Tests de validation
const tests = [
  {
    name: "Service ID format",
    test: () => config.serviceId.startsWith("service_"),
    fix: "Le Service ID doit commencer par 'service_'",
  },
  {
    name: "Template ID format",
    test: () => config.templateId.startsWith("template_"),
    fix: "Le Template ID doit commencer par 'template_'",
  },
  {
    name: "Public Key longueur",
    test: () => config.publicKey.length >= 15,
    fix: "La Public Key doit faire au moins 15 caractères",
  },
];

console.log("🧪 Exécution des tests...");

tests.forEach((test) => {
  const result = test.test();
  console.log(
    `${result ? "✅" : "❌"} ${test.name}: ${result ? "OK" : test.fix}`
  );
});

// Test de connexion EmailJS (si disponible)
if (typeof emailjs !== "undefined") {
  console.log("📡 Test de connexion EmailJS...");

  emailjs.init(config.publicKey);

  const testParams = {
    from_name: "Test Diagnostic",
    from_email: "test@example.com",
    phone: "Test",
    subject: "Test de diagnostic EmailJS",
    message: "Ceci est un test automatique de diagnostic.",
    to_email: "contact@moncoachinformatique.fr",
  };

  emailjs
    .send(config.serviceId, config.templateId, testParams)
    .then((response) => {
      console.log("✅ Test EmailJS réussi:", response);
      alert("✅ Configuration EmailJS valide ! Le problème vient d'ailleurs.");
    })
    .catch((error) => {
      console.error("❌ Erreur de test EmailJS:", error);

      const commonErrors = {
        "Invalid template ID": "❌ Template ID incorrect ou template supprimé",
        "Invalid service ID": "❌ Service ID incorrect ou service désactivé",
        "Invalid public key": "❌ Public Key incorrecte",
        "Template not found": "❌ Template introuvable - vérifiez qu'il existe",
        "Service not found":
          "❌ Service introuvable - vérifiez qu'il est actif",
        "Authentication failed":
          "❌ Échec authentification - vérifiez vos paramètres SMTP Ionos",
        "SMTP error":
          "❌ Erreur SMTP - vérifiez la config de votre service EmailJS",
      };

      let diagnosis = "❓ Erreur inconnue";
      for (const [key, message] of Object.entries(commonErrors)) {
        if (error.message && error.message.includes(key)) {
          diagnosis = message;
          break;
        }
      }

      console.log("🔍 Diagnostic:", diagnosis);
      alert(
        `❌ Erreur EmailJS détectée:\n\n${diagnosis}\n\nDétails: ${
          error.message || error
        }`
      );
    });
} else {
  console.log(
    "⚠️ EmailJS non chargé - ouvrez test-emailjs.html pour un test complet"
  );
}

export { config };
