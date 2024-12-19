"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="border-t bg-muted/50">
      <div className="container py-16 md:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Updated</h2>
          <p className="mb-8 text-muted-foreground text-lg">
            Subscribe to our newsletter for the latest market insights and exclusive opportunities
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-2 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 transition-colors hover:border-primary focus-visible:ring-2"
                disabled={isLoading}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>
            <Button 
              type="submit" 
              className="h-11 px-8 transition-all duration-200 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="animate-pulse">Subscribing...</span>
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}