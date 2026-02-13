import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, LucideLaptop } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Brand Identity",
    description: "Creating unique and memorable brand identities that resonate with your audience."
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces for web and mobile applications."
  },
  {
    icon: <LucideLaptop className="h-8 w-8" />,
    title: "Web site and applications",
    description: "Building responsive and performant websites and applications using modern technologies."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What I do</h2>
            {/* <p className="mt-4 text-xl text-gray-600">Things that i like to do</p> */}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="text-[#687451]">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;