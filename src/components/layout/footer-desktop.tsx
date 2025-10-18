import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

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

export function FooterDesktop() {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/p/Isha-Fashions-Sydney-100089806684908/", 
      label: "Facebook" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/dulhanexclusivesbyisha/", 
      label: "Instagram" 
    },
    { 
      icon: TikTokIcon, 
      href: "https://www.tiktok.com/@dulhanexclusivesbyisha", 
      label: "TikTok" 
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary border-t border-border text-white">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Dulhan Exclusives Home">
               {/* Add items-end to right-align the text */}
               <div className="flex flex-col leading-tight items-end"> 
                   <span className="text-xl font-bold tracking-tight font-headline text-secondary">
                    Dulhan Exclusives
                   </span>
               {/* Remove the pl-14, it's no longer needed */}
                 <span className="text-base font-medium text-secondary italic">
                     by Isha Fashions
                  </span>
             </div>
           </Link>
            <p className="mt-4 text-muted-foreground leading-relaxed text-white">
              Exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-white hover:shadow-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="items-center gap-3">
                <div className="relative mb-2">
                  <div className="w-full h-50% rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d150.925!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShop+1%2F240+George+St%2C+Liverpool+NSW+2170%2C+Australia!5e0!3m2!1sen!2sau!4v1234567890"
                      width="100%"
                      height="50%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dulhan Exclusives Showroom Location"
                      className="w-full h-50%"
                    ></iframe>
                  </div>
                </div>
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-muted-foreground text-white text-sm">
                  Shop 1/240 George St, Liverpool NSW 2170, Australia
                </span>
             </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-muted-foreground text-white text-sm">
                  info@dulhanexclusives.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Links - Prominently displayed */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground text-white hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-8 border-t border-border/50 ">
          <div className="text-center">
            <p className="text-sm text-muted-foreground text-white">
              © {new Date().getFullYear()} Dulhan Exclusives. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 