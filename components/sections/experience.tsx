"use client";

import { motion } from "framer-motion";
import { Building2, Users2, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    value: "1000+",
    label: "Properties Sold",
    icon: Building2
  },
  {
    value: "5000+",
    label: "Happy Clients",
    icon: Users2
  },
  {
    value: "$1B+",
    label: "in Sales Volume",
    icon: TrendingUp
  },
  {
    value: "13+",
    label: "Years Experience",
    icon: Clock
  }
];

const specialties = [
  {
    title: "Luxury Apartments",
    description: "Expertise in high-end residential properties with premium amenities."
  },
  {
    title: "First-Time Buyers",
    description: "Dedicated support for those entering the property market."
  },
  {
    title: "Investment Properties",
    description: "Strategic guidance for property investment opportunities."
  },
  {
    title: "Urban Living",
    description: "Specialized knowledge of city center and metropolitan properties."
  }
];

export function Experience() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industry Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Over a decade of excellence in real estate, serving thousands of satisfied clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Specialties */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-2">{specialty.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
