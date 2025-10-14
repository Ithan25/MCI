import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Cliente satisfaite",
      content:
        "Excellent accompagnement pour apprendre l'informatique ! Les explications sont claires et adaptées à mon niveau. Je recommande vivement ses services.",
      rating: 5,
      location: "Nantes 44000",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
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
            Ils m'ont fait confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez le témoignage d'un de mes clients satisfaits. Particuliers
            et seniors font confiance à Mon Coach Informatique pour leur
            apprentissage numérique.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          <div className="max-w-md">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect card-shadow p-6 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-primary rounded-full p-3 shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-end mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-poppins font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    📍 {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl text-primary mb-2">
                  100%
                </div>
                <div className="text-gray-600">Recommandations</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl text-primary mb-2">
                  5★
                </div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-3xl text-primary mb-2">
                  3
                </div>
                <div className="text-gray-600">Ans d'expérience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
            Rejoignez mes clients satisfaits
          </h3>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Demander un devis gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
