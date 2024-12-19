"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Shield, Lightbulb, Gem } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client-Centric",
    description: "We put our clients' needs first, ensuring personalized service that exceeds expectations."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every interaction, transaction, and relationship."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting relationships within our community, fostering trust and collaboration."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and ethical conduct in all our dealings."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and ideas to provide cutting-edge solutions."
  },
  {
    icon: Gem,
    title: "Quality",
    description: "We deliver premium service and maintain exceptional standards in everything we do."
  }
];

export function MissionValues() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            To empower individuals and families in their journey to find the perfect home through innovative solutions, 
            exceptional service, and unwavering commitment to their success.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
