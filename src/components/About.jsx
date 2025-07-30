import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Nossa equipe possui ampla experiência no setor de construção, garantindo resultados excepcionais em cada projeto.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Trabalhamos com metas claras e prazos definidos, assegurando a entrega pontual de cada empreendimento.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Utilizamos materiais de primeira linha e seguimos rigorosos padrões de qualidade em todas as etapas.',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">NTC Brasil</span>
            ?
          </h2>
          <p className="text-gray-600 text-lg">
            Somos uma empresa comprometida com a excelência em construção,
            oferecendo soluções inovadoras e sustentáveis para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Conheça Nossa História
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
