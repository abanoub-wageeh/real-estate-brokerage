"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2010",
    title: "Foundation",
    description: "Elite Brokerage was established with a vision to revolutionize the real estate industry through personalized service and cutting-edge technology."
  },
  {
    year: "2013",
    title: "Digital Innovation",
    description: "Launched our first virtual tour platform, making remote property viewing accessible to all clients."
  },
  {
    year: "2015",
    title: "Market Expansion",
    description: "Expanded our services to cover the entire metropolitan area, helping thousands find their perfect homes."
  },
  {
    year: "2018",
    title: "Client Success Program",
    description: "Introduced our comprehensive client support program, ensuring seamless property transactions from start to finish."
  },
  {
    year: "2020",
    title: "Virtual Revolution",
    description: "Pioneered advanced virtual and augmented reality solutions for immersive property tours."
  },
  {
    year: "2023",
    title: "Sustainable Future",
    description: "Launched our green initiative, focusing on eco-friendly properties and sustainable living solutions."
  }
];

export function CompanyStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-gray-600 dark:text-gray-400">
          From humble beginnings to industry leadership, our story is one of innovation, dedication, and client success.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

        {/* Timeline Items */}
        <div className="relative">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-6">
                <div className={`${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}>
                  <span className="text-primary font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
              </div>

              {/* Empty Space for Other Side */}
              <div className="w-1/2 px-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
