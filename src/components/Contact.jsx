import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/emailjs.js";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  // Initialiser EmailJS au chargement du composant
  useEffect(() => {
    if (emailConfig.publicKey && emailConfig.publicKey !== "your_public_key") {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mode développement : utiliser mailto: directement pour contourner CSP
    if (import.meta.env.DEV) {
      console.log("🔧 Mode développement détecté - utilisation de mailto:");

      const subject = encodeURIComponent(
        formData.subject || "Contact depuis le site web"
      );
      const body = encodeURIComponent(
        `Nom : ${formData.name}\n` +
          `Email : ${formData.email}\n` +
          `Téléphone : ${formData.phone}\n\n` +
          `Message :\n${formData.message}`
      );

      const mailtoLink = `mailto:contact@moncoachinformatique.fr?subject=${subject}&body=${body}`;

      // Simuler un délai d'envoi
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Ouvrir le client email
        window.location.href = mailtoLink;

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);

      return;
    }

    try {
      // Configuration EmailJS (production uniquement)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "contact@moncoachinformatique.fr",
      };

      // Vérification détaillée de la configuration avant envoi
      console.log("🔍 Vérification de la configuration EmailJS...");

      if (!emailConfig.serviceId || emailConfig.serviceId === "service_mci") {
        throw new Error("Service ID manquant ou invalide dans emailjs.js");
      }

      if (
        !emailConfig.templateId ||
        emailConfig.templateId === "template_mci"
      ) {
        throw new Error("Template ID manquant ou invalide dans emailjs.js");
      }

      if (
        !emailConfig.publicKey ||
        emailConfig.publicKey === "your_public_key"
      ) {
        throw new Error("Public Key manquante ou invalide dans emailjs.js");
      }

      console.log("✅ Configuration EmailJS validée");

      // Envoi via EmailJS
      console.log("Tentative d'envoi avec:", {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey.substring(0, 8) + "...",
      });

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log("✅ Email envoyé avec succès!", result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("❌ Erreur détaillée lors de l'envoi:", error);
      console.error("Type d'erreur:", error.name);
      console.error("Message d'erreur:", error.message);
      console.error("Status:", error.status);
      console.error("Text:", error.text);
      setIsSubmitting(false);

      // Détection spécifique des erreurs CSP
      const isCSPError =
        error.message &&
        (error.message.includes("Content Security Policy") ||
          error.message.includes("Failed to fetch") ||
          error.message.includes(
            "violates the following Content Security Policy"
          ));

      // Afficher un message d'erreur simple
      alert(
        "Impossible d'envoyer votre message automatiquement.\n\n" +
          "Vous pouvez nous contacter directement à :\n" +
          "contact@moncoachinformatique.fr\n\n" +
          "Ou essayez à nouveau dans quelques minutes."
      );
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@moncoachinformatique.fr",
      link: "mailto:contact@moncoachinformatique.fr",
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      value: "Nantes & agglomération",
      link: null,
    },
    {
      icon: Clock,
      title: "Disponibilités",
      value: "Week-ends & soirs sur rendez-vous",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-light to-white relative floating-particles geometric-shapes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Vous avez un projet de formation ? Une question sur mes services ?
            N'hésitez pas à me contacter pour un devis gratuit et personnalisé.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-4 lg:mb-0"
          >
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
              Demande de devis gratuit
            </h3>

            {/* Indicateur de mode développement */}
            {import.meta.env.DEV && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-blue-700 text-sm text-center">
                  🔧 Mode développement : Le formulaire ouvrira votre client
                  email
                </p>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-6 flex items-center"
              >
                <CheckCircle className="h-5 w-5 text-accent mr-3" />
                <span className="text-accent-800">
                  {import.meta.env.DEV
                    ? "Votre client email va s'ouvrir avec le message pré-rempli !"
                    : "Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais."}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Votre nom et prénom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="formation-windows">
                      Formation Windows 11
                    </option>
                    <option value="formation-office">
                      Formation Microsoft 365
                    </option>
                    <option value="securite-mails">Sécurité & Emails</option>
                    <option value="atelier-collectif">Atelier collectif</option>
                    <option value="achat-pc">Aide achat PC</option>
                    <option value="installation">Installation & Config</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez vos besoins, votre niveau actuel, vos objectifs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-600 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Champs obligatoires - Réponse sous 24h
            </p>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <div className="bg-primary-50 rounded-full p-3 mr-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                Contact rapide
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:contact@moncoach-informatique.fr"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-3"
                >
                  <Mail size={20} />
                  <span>Envoyer un email</span>
                </motion.a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                Devis gratuit & sans engagement
              </h4>
              <p className="text-gray-600 text-sm">
                Étude personnalisée de vos besoins avec proposition tarifaire
                transparente
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
