"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    title: "Successful Deals",
    value: "500+",
    icon: TrendingUp,
    description: "Transactions completed",
  },
  {
    title: "Years Experience",
    value: "25+",
    icon: Building2,
    description: "In business brokerage",
  },
  {
    title: "Happy Clients",
    value: "1000+",
    icon: Users,
    description: "Satisfied customers",
  },
  {
    title: "Industry Awards",
    value: "15",
    icon: Award,
    description: "Recognition of excellence",
  },
];

export function Statistics() {
  return (
    <section className="container py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <stat.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
            <p className="mb-1 font-medium">{stat.title}</p>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}