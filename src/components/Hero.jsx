import { motion } from "framer-motion";
import { ArrowRight, Monitor, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const advantages = [
    {
      icon: BookOpen,
      title: "Pédagogie",
      description: "Méthode adaptée à votre rythme",
    },
    {
      icon: Monitor,
      title: "Simplicité",
      description: "Explications claires et concrètes",
    },
    {
      icon: Users,
      title: "Sur mesure",
      description: "Formation personnalisée",
    },
  ];

  return (
    <section
      id="home"
      className="lg:pt-10 pb-16 min-h-screen flex items-center relative overflow-hidden floating-particles"
    >
      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-decoration w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full top-20 left-[10%]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="floating-decoration w-32 h-32 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full top-40 right-[15%]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="pulsing-decoration w-16 h-16 bg-gradient-to-br from-primary/12 to-accent/12 rounded-full bottom-32 left-[20%]"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="floating-decoration w-24 h-24 bg-gradient-to-br from-accent/6 to-primary/6 rounded-full bottom-20 right-[25%]"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6"
            >
              Mon Coach <span className="text-primary">Informaclique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl font-poppins font-medium text-primary mb-4"
            >
              L'informatique, simple comme un clic.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Coaching et formation informatique accessibles à tous. Apprenez à
              maîtriser Windows, Microsoft 365, votre smartphone et tablette
              avec une approche pédagogique personnalisée.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToServices}
                className="btn-primary inline-flex items-center justify-center space-x-2 glow-effect"
              >
                <span>Découvrir mes services</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                Me contacter
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center flex flex-col items-center">
                <Monitor className="h-24 w-24 text-primary mx-auto mb-6" />
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                  Formation Personnalisée
                </h3>
                <p className="text-gray-600">
                  Particuliers • Collectivités • Écoles • Associations
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 sm:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              className="text-center flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-accent-100 mb-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
