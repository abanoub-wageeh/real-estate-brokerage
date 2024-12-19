"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Star } from "lucide-react";

const credentials = [
  {
    title: "Licensed Real Estate Brokerage",
    description: "Fully licensed and regulated by the State Real Estate Commission",
    icon: Award
  },
  {
    title: "National Association of Realtors®",
    description: "Active member upholding the highest professional standards",
    icon: Star
  },
  {
    title: "Certified Residential Specialist (CRS)",
    description: "Advanced training in residential real estate",
    icon: CheckCircle
  }
];

const certifications = [
  {
    name: "Real Estate License",
    issuer: "State Real Estate Commission",
    year: "2010"
  },
  {
    name: "Certified Luxury Home Marketing Specialist",
    issuer: "Institute for Luxury Home Marketing",
    year: "2015"
  },
  {
    name: "Accredited Buyer's Representative",
    issuer: "Real Estate Buyer's Agent Council",
    year: "2012"
  },
  {
    name: "Green Housing Certification",
    issuer: "National Association of Realtors",
    year: "2018"
  }
];

export function Credentials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Credentials & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our commitment to excellence is backed by industry-recognized credentials and certifications.
          </p>
        </div>

        {/* Main Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <credential.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{credential.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
                <span className="text-primary font-medium">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
