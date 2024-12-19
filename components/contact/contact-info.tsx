"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function ContactInfo() {
  const contactDetails = {
    phone: "+1 (555) 123-4567",
    email: "contact@luxrealty.com",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    social: {
      facebook: "https://facebook.com/luxrealty",
      twitter: "https://twitter.com/luxrealty",
      instagram: "https://instagram.com/luxrealty",
      linkedin: "https://linkedin.com/company/luxrealty",
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Contact Information
      </h3>

      {/* Direct Contact */}
      <div className="space-y-4">
        <a
          href={`tel:${contactDetails.phone}`}
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary"
        >
          <Phone className="w-5 h-5" />
          <span>{contactDetails.phone}</span>
        </a>

        <a
          href={`mailto:${contactDetails.email}`}
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary"
        >
          <Mail className="w-5 h-5" />
          <span>{contactDetails.email}</span>
        </a>

        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
          <MapPin className="w-5 h-5" />
          <span>{contactDetails.address}</span>
        </div>
      </div>

      {/* Business Hours */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Business Hours
        </h4>
        <div className="space-y-2 pl-7">
          <p className="text-gray-600 dark:text-gray-300">
            Monday - Friday: {contactDetails.hours.weekdays}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Saturday: {contactDetails.hours.saturday}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Sunday: {contactDetails.hours.sunday}
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          Follow Us
        </h4>
        <div className="flex items-center gap-4">
          <a
            href={contactDetails.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href={contactDetails.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href={contactDetails.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href={contactDetails.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
