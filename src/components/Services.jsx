import { motion } from "framer-motion";
import {
  Monitor,
  FileText,
  Smartphone,
  ShoppingCart,
  Laptop,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Initiation à Windows 11",
      description:
        "Découvrez les fonctionnalités essentielles de Windows 11, personnalisez votre bureau et maîtrisez les raccourcis clavier.",
      features: [
        "Navigation dans l'interface",
        "Gestion des fichiers",
        "Paramètres système",
        "Applications intégrées",
      ],
    },
    {
      icon: FileText,
      title: "Formation Microsoft 365",
      description:
        "Maîtrisez Word, Excel, PowerPoint et Outlook pour être plus productif au quotidien.",
      features: [
        "Traitement de texte avancé",
        "Tableurs et calculs",
        "Présentations impactantes",
        "Gestion des emails",
      ],
    },
    {
      icon: Smartphone,
      title: "Accompagnement Seniors",
      description:
        "Formation spécialement adaptée aux seniors pour maîtriser smartphone, tablette et outils numériques du quotidien.",
      features: [
        "Utilisation du smartphone",
        "Applications essentielles",
        "Communication digitale",
        "Sécurité et confiance",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Aide à l'achat PC",
      description:
        "Conseils personnalisés pour choisir et acheter l'ordinateur qui correspond parfaitement à vos besoins.",
      features: [
        "Analyse des besoins",
        "Comparatif matériel",
        "Accompagnement achat",
        "Rapport qualité-prix",
      ],
    },
    {
      icon: Laptop,
      title: "Installation & Configuration",
      description:
        "Installation complète de votre nouvel ordinateur et configuration des logiciels essentiels.",
      features: [
        "Installation système",
        "Configuration logiciels",
        "Transfert de données",
        "Formation première utilisation",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative section-pattern floating-particles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des formations sur mesure pour tous les niveaux, du débutant à
            l'utilisateur confirmé. Chaque service est adapté à votre rythme et
            à vos objectifs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-effect card-shadow overflow-hidden group ripple-effect"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-primary to-primary-600 p-6 text-white">
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full mt-6 bg-accent hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
              Besoin d'une formation personnalisée ?
            </h3>
            <p className="text-gray-600 mb-6">
              Chaque formation est adaptée à vos besoins spécifiques.
              Contactez-moi pour définir ensemble le programme qui vous
              convient.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Discutons de votre projet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
