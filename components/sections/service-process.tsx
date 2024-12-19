"use client";

import { motion } from "framer-motion";
import { Search, Home, FileText, Key, MessageCircle, Handshake } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Initial Consultation",
    description: "We discuss your needs, preferences, and budget to understand your ideal property."
  },
  {
    icon: Home,
    title: "Property Search",
    description: "Our team searches and filters the best properties matching your criteria."
  },
  {
    icon: MessageCircle,
    title: "Property Viewings",
    description: "Schedule and attend viewings of selected properties with our agents."
  },
  {
    icon: FileText,
    title: "Offer & Negotiation",
    description: "We help prepare and negotiate the best offer for your chosen property."
  },
  {
    icon: Key,
    title: "Documentation",
    description: "Handle all necessary paperwork and legal documentation for the transaction."
  },
  {
    icon: Handshake,
    title: "Closing",
    description: "Complete the transaction and receive keys to your new property."
  }
];

export function ServiceProcess() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A streamlined approach to help you find and secure your dream property.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
