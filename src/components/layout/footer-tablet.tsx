"use client";

import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

// Placeholder Logo component to resolve import error
const Logo = () => (
  <div
    className="flex items-center justify-center md:justify-start gap-2 group"
    aria-label="Dulhan Exclusives Home"
  >
    <div className="flex flex-col leading-tight items-end">
      <span className="text-xl font-bold tracking-tight font-headline text-secondary">
        Dulhan Exclusives
      </span>
      <span className="text-base font-medium text-secondary italic">
        by Isha Fashions
      </span>
    </div>
  </div>
);

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function FooterTablet() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/p/Isha-Fashions-Sydney-100089806684908/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dulhanexclusivesbyisha/",
      label: "Instagram",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@dulhanexclusivesbyisha",
      label: "TikTok",
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary border-t border-border text-white">
      <div className="container mx-auto px-6 py-12 max-w-full">
        {/* Mobile: Single column, Tablet+: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-4 text-muted-foreground leading-relaxed text-white">
              Exquisite bridal wear that celebrates your unique story.
              Handcrafted with love, for your most memorable day.
            </p>
          </div>

          {/* Quick Links and Contact */}
          <div className="text-center md:text-left">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-base mb-3 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-secondary transition-colors text-sm text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-3 text-white">
                  Contact
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm text-white">
                      Shop 1/240 George St, Liverpool NSW 2170, Australia
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm text-white">
                      info@dulhanexclusives.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links - Prominently displayed */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-base mb-3 text-white">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="text-center">
            <p className="text-sm text-muted-foreground text-white">
              © {new Date().getFullYear()} Dulhan Exclusives. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
