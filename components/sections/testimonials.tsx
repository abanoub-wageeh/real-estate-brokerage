"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Elite Brokerage was a game-changer for our business acquisition. Their expertise and guidance were invaluable.",
    author: "Sarah Johnson",
    position: "CEO, Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The team's professionalism and market knowledge helped us secure the perfect location for our expansion.",
    author: "Michael Chen",
    position: "Founder, GrowthWorks",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Their attention to detail and commitment to our success made all the difference in our business sale.",
    author: "Emily Rodriguez",
    position: "Former Owner, Retail Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted py-24 px-6">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Client Testimonials</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear what our clients have to say about their experience working with us
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-lg">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}