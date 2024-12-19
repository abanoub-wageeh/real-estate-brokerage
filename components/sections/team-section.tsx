"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years in real estate, Sarah leads our team with vision and expertise. She's passionate about helping families find their perfect homes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    contact: {
      email: "sarah.j@elitebrokerage.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/sarahjohnson"
    }
  },
  {
    name: "Michael Chen",
    position: "Head of Operations",
    bio: "Michael ensures smooth operations and exceptional client service. His background in technology helps drive our innovative solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    contact: {
      email: "michael.c@elitebrokerage.com",
      phone: "+1 (555) 234-5678",
      linkedin: "linkedin.com/in/michaelchen"
    }
  },
  {
    name: "Emily Rodriguez",
    position: "Senior Property Consultant",
    bio: "Emily's deep knowledge of the local market and attention to detail have helped countless clients find their dream homes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    contact: {
      email: "emily.r@elitebrokerage.com",
      phone: "+1 (555) 345-6789",
      linkedin: "linkedin.com/in/emilyrodriguez"
    }
  },
  {
    name: "David Thompson",
    position: "Financial Advisor",
    bio: "David specializes in helping clients navigate the financial aspects of property investment and home buying.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    contact: {
      email: "david.t@elitebrokerage.com",
      phone: "+1 (555) 456-7890",
      linkedin: "linkedin.com/in/davidthompson"
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Meet the dedicated professionals who make finding your dream home possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>

                {/* Contact Information */}
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href={`mailto:${member.contact.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      {member.contact.email}
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href={`tel:${member.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {member.contact.phone}
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href={`https://${member.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
