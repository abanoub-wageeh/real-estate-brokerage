"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const services = [
  {
    name: "Basic Package",
    price: "$999",
    features: [
      { name: "Property Listings Access", included: true },
      { name: "Basic Property Search", included: true },
      { name: "Email Support", included: true },
      { name: "Virtual Tours", included: false },
      { name: "Dedicated Agent", included: false },
      { name: "Priority Viewings", included: false },
      { name: "Legal Consultation", included: false },
      { name: "Moving Assistance", included: false }
    ]
  },
  {
    name: "Premium Package",
    price: "$1,999",
    featured: true,
    features: [
      { name: "Property Listings Access", included: true },
      { name: "Advanced Property Search", included: true },
      { name: "24/7 Support", included: true },
      { name: "Virtual Tours", included: true },
      { name: "Dedicated Agent", included: true },
      { name: "Priority Viewings", included: true },
      { name: "Legal Consultation", included: false },
      { name: "Moving Assistance", included: false }
    ]
  },
  {
    name: "Elite Package",
    price: "$2,999",
    features: [
      { name: "Property Listings Access", included: true },
      { name: "Advanced Property Search", included: true },
      { name: "24/7 VIP Support", included: true },
      { name: "Virtual Tours", included: true },
      { name: "Dedicated Agent Team", included: true },
      { name: "Priority Viewings", included: true },
      { name: "Legal Consultation", included: true },
      { name: "Moving Assistance", included: true }
    ]
  }
];

export function ServiceComparison() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Choose the perfect package for your property needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                service.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>
                
                <div className="space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                      )}
                      <span className={feature.included ? "text-gray-900 dark:text-gray-100" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  service.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}>
                  Choose {service.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
