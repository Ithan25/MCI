import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  const goHome = () => {
    window.location.hash = "";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-light to-white flex items-center justify-center px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="font-poppins font-bold text-8xl md:text-9xl text-primary opacity-20 select-none">
              404
            </h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-full p-6 shadow-lg">
                <HelpCircle className="h-16 w-16 text-primary" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Oups ! Page non trouvée
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            Il semblerait que cette page n'existe pas ou ait été déplacée. Pas
            de panique, même les meilleurs coaches peuvent parfois se perdre !
          </p>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-md mx-auto"
        >
          <div className="text-4xl mb-4">🤔</div>
          <p className="text-gray-700 font-medium">
            "L'informatique, c'est simple... sauf quand on cherche une page qui
            n'existe pas !"
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={goHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-3"
          >
            <Home size={20} />
            <span>Retour à l'accueil</span>
          </motion.button>

          <motion.button
            onClick={goBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline flex items-center space-x-3"
          >
            <ArrowLeft size={20} />
            <span>Page précédente</span>
          </motion.button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
            Besoin d'aide ?
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <motion.button
              onClick={() => {
                window.location.hash = "";
                setTimeout(() => {
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary-50 hover:bg-primary-100 text-primary p-4 rounded-xl transition-colors duration-200 text-center"
            >
              <Search className="h-6 w-6 mx-auto mb-2" />
              <span className="font-medium">Mes services</span>
            </motion.button>

            <motion.button
              onClick={() => {
                window.location.hash = "";
                setTimeout(() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-accent-50 hover:bg-accent-100 text-accent p-4 rounded-xl transition-colors duration-200 text-center"
            >
              <HelpCircle className="h-6 w-6 mx-auto mb-2" />
              <span className="font-medium">Me contacter</span>
            </motion.button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à me
            contacter !
          </p>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-xs text-gray-400"
        >
          💡 Astuce : Utilisez Ctrl+F5 pour rafraîchir complètement la page !
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
