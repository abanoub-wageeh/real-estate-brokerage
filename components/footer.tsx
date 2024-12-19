import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background px-6">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">Elite Brokerage</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding your perfect home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-muted-foreground hover:text-primary">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                123 Business Ave
                <br />
                New York, NY 10001
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@elitebrokerage.com" className="text-muted-foreground hover:text-primary">
                  info@elitebrokerage.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Elite Brokerage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}