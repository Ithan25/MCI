import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    setIsMenuOpen(false);
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="bg-white p-4 sm:p-2 rounded-lg shadow-sm">
              <img
                src="/logo-mci.svg"
                alt="Logo MCI"
                className="h-6 w-10 sm:h-8 sm:w-8 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-gray-900">
                Mon Coach Informatique
              </h1>
              <p className="text-sm text-gray-600">
                L'informatique, simple comme un clic
              </p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-3 py-3 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-2 text-gray-700 hover:bg-gray-50 rounded"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
            >
              Me contacter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
