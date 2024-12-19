"use client";

import { ServicesOverview } from "@/components/sections/services-overview";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServiceRequestForm } from "@/components/sections/service-request-form";
import { FAQSection } from "@/components/sections/faq-section";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
            opacity: "0.3",
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <ServicesOverview />
        <ServiceProcess />
        <ServiceRequestForm />
        <FAQSection />
      </div>
    </main>
  );
}
