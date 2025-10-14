import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMci from "../assets/logo-mci.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-white/30 z-50 shadow-lg overflow-hidden">
      <div className="absolute inset-0 shimmer-effect opacity-30"></div>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0"
          >
            <div className="bg-white p-1 rounded-lg shadow-md flex-shrink-0">
              <img src={logoMci} alt="Logo MCI" className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-lg sm:text-xl text-gray-900">
                Mon Coach Informatique
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                L'informatique, simple comme un clic
              </p>
            </div>
            <div className="block sm:hidden">
              <h1 className="font-poppins font-bold text-base text-gray-900">
                MCI
              </h1>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block btn-primary"
          >
            Me contacter
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg"
        >
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/10 font-medium transition-all duration-200 rounded-lg"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection("#contact")}
              className="w-full btn-primary mt-4"
            >
              Me contacter
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
