"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  {
    year: "2023",
    title: "Best Real Estate Agency",
    issuer: "City Business Awards",
    description: "Recognized for exceptional service and client satisfaction"
  },
  {
    year: "2022",
    title: "Top Luxury Property Brokerage",
    issuer: "Real Estate Excellence Awards",
    description: "Leading agency in luxury property transactions"
  },
  {
    year: "2021",
    title: "Innovation in Real Estate",
    issuer: "Property Tech Awards",
    description: "Pioneering digital solutions in property transactions"
  }
];

const achievements = [
  {
    stat: "#1",
    label: "In Customer Satisfaction",
    period: "2020-2023"
  },
  {
    stat: "Top 5",
    label: "Real Estate Agencies",
    period: "Metropolitan Area"
  },
  {
    stat: "95%",
    label: "Client Retention Rate",
    period: "Last 3 Years"
  }
];

export function Awards() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our commitment to excellence has been recognized by industry leaders.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {achievement.stat}
              </div>
              <div className="font-semibold mb-1">{achievement.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{award.title}</h3>
                    <span className="text-primary font-medium">{award.year}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {award.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
