"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services do you offer for first-time buyers?",
    answer: "We offer comprehensive support for first-time buyers, including property search assistance, mortgage guidance, explanation of the buying process, and help with paperwork. Our dedicated agents will guide you through every step of your first property purchase."
  },
  {
    question: "How long does the typical property purchase process take?",
    answer: "The typical property purchase process usually takes 2-3 months from offer acceptance to completion. However, this can vary depending on factors such as chain length, mortgage approval, and legal proceedings. We'll keep you informed throughout the process."
  },
  {
    question: "What areas do you cover?",
    answer: "We primarily operate in major metropolitan areas and surrounding suburbs, with a special focus on luxury apartments and residential properties. Contact us to check if we service your desired location."
  },
  {
    question: "How do you determine property valuations?",
    answer: "Our property valuations are based on comprehensive market analysis, including recent sales data, property condition, location, market trends, and local amenities. We use both traditional methods and advanced analytics tools to ensure accurate pricing."
  },
  {
    question: "What sets your brokerage services apart?",
    answer: "Our brokerage stands out through our combination of extensive market knowledge, personalized service, cutting-edge technology, and a client-first approach. We also offer virtual tours, 24/7 support, and a dedicated agent for each client."
  },
  {
    question: "Do you offer virtual property viewings?",
    answer: "Yes, we offer high-quality virtual tours and video walkthroughs for all our listed properties. This service is available for both local and international clients, making property viewing convenient and accessible."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
