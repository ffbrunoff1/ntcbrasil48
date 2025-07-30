import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Construindo o Futuro</span>
              <br />
              com Qualidade e Excelência
            </h1>

            <p className="text-lg text-gray-600 md:pr-12">
              Transformamos visões em realidade através de projetos inovadores e
              soluções construtivas que superam expectativas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="btn btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicite um Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#services"
                className="btn btn-outline flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossos Serviços
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">10+</h3>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-primary">100+</h3>
                  <p className="text-gray-600">Projetos Realizados</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform rotate-3 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
