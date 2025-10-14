import { motion } from "framer-motion";
import {
  User,
  Heart,
  Target,
  Award,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Pédagogie",
      description:
        "Méthodes d'enseignement adaptées à chaque profil d'apprenant",
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Accompagnement personnalisé et relation de confiance",
    },
    {
      icon: Target,
      title: "Simplicité",
      description: "Explications claires sans jargon technique",
    },
    {
      icon: Heart,
      title: "Accessibilité",
      description: "L'informatique pour tous, quel que soit le niveau",
    },
  ];

  const qualifications = [
    "Passionné d'informatique depuis de nombreuses années",
    "Expérience dans l'accompagnement et le conseil numérique",
    "Pédagogie adaptée à tous les niveaux",
    "Sens du service et de la simplicité",
  ];

  return (
    <section
      id="about"
      className="py-20 relative grid-overlay geometric-shapes decorative-lines"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              À propos de votre coach
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                Passionné d'informatique et de pédagogie, j'accompagne depuis
                Nantes particuliers, seniors et collectivités dans leur
                apprentissage du numérique. Mon objectif : rendre l'informatique
                accessible à tous !
              </p>

              <p>
                Fort d'une expérience variée auprès de publics différents, j'ai
                développé une approche pédagogique unique qui s'adapte au rythme
                et aux besoins de chacun. Que vous soyez débutant complet,
                senior découvrant le smartphone, ou utilisateur confirmé, je
                vous accompagne avec patience et bienveillance.
              </p>

              <p>
                Ma mission ? Vous donner les clés pour être autonome et en
                confiance avec vos outils informatiques. Car l'informatique,
                c'est vraiment simple comme un clic quand c'est bien expliqué !
              </p>
            </div>

            {/* Qualifications */}
            <div className="glass-effect p-6 mb-8">
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 text-primary mr-3" />
                Qualifications & Certifications
              </h3>
              <ul className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1">
              <div className="text-center bg-accent-50 rounded-xl p-4">
                <div className="font-poppins font-bold text-2xl text-accent mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
            </div>
          </motion.div>

          {/* Values & Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-8 text-white text-center">
              <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">
                Votre Coach Informatique
              </h3>
              <p className="text-primary-100 mb-4">
                Spécialiste en formation numérique personnalisée
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-primary-100">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Disponible à la demande
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-6">
                Mes valeurs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <div className="bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-light to-white rounded-2xl p-8 lg:p-12">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 text-center mb-8">
              Ma méthode pédagogique
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-2xl text-white">
                    1
                  </span>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Évaluation des besoins
                </h4>
                <p className="text-gray-600">
                  Analyse de votre niveau et définition d'objectifs
                  personnalisés
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-2xl text-white">
                    2
                  </span>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Formation adaptée
                </h4>
                <p className="text-gray-600">
                  Apprentissage progressif avec exercices pratiques et concrets
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-2xl text-white">
                    3
                  </span>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Suivi personnalisé
                </h4>
                <p className="text-gray-600">
                  Accompagnement continu pour garantir votre autonomie
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
