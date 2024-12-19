"use client";

import { motion } from "framer-motion";
import { Home, Search, Calculator, Headset, ClipboardCheck, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesOverview() {
  const services = [
    {
      title: "Property Search",
      description: "Access our extensive database of apartments with advanced filters to find your perfect match",
      icon: Search,
    },
    {
      title: "Virtual Tours",
      description: "Take virtual tours of apartments from the comfort of your home before scheduling in-person visits",
      icon: Home,
    },
    {
      title: "Mortgage Calculator",
      description: "Calculate your monthly payments and explore financing options with our easy-to-use tools",
      icon: Calculator,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to answer your questions and provide guidance",
      icon: Headset,
    },
    {
      title: "Document Assistance",
      description: "Get expert help with all paperwork and legal documents required for your purchase",
      icon: ClipboardCheck,
    },
    {
      title: "Move-in Support",
      description: "Seamless support from purchase completion to getting the keys to your new home",
      icon: Key,
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive support throughout your apartment buying journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-none mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}