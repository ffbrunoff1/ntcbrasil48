import { motion } from 'framer-motion';
import { Building2, Warehouse, HomeIcon, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: 'Construção Comercial',
      description:
        'Desenvolvimento de espaços comerciais modernos e funcionais, adaptados às necessidades do seu negócio.',
    },
    {
      icon: <Warehouse className="w-12 h-12 text-primary" />,
      title: 'Projetos Industriais',
      description:
        'Construção de instalações industriais com foco em eficiência operacional e segurança.',
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-primary" />,
      title: 'Construção Residencial',
      description:
        'Realização de projetos residenciais com qualidade superior e acabamento premium.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Gerenciamento de Obras',
      description:
        'Gestão completa de projetos de construção, garantindo prazos e qualidade.',
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em construção civil, com foco em
            qualidade e satisfação do cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
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
          <a href="#contact" className="btn btn-primary">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
