"use client";

import React from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Star,
  Users,
  Award,
  Facebook,
  Instagram,
  Shirt,
} from "lucide-react";

// --- Placeholder Components ---
// These are simplified versions of your custom components.
// Replace them with your actual imports from your project structure.

const RotatingLehenga = () => (
  <div className="hidden sm:inline-block w-24 h-24 bg-primary/20 rounded-full animate-pulse ml-4 align-middle"></div>
);

const AnimatedStatsSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Brides" },
    { icon: Star, value: "4.9", label: "Customer Rating" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Shirt, value: "2k+", label: "Collections" },
    { icon: MapPin, value: "100+", label: "Designs" },
  ];
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2" />
              <p className="text-xl sm:text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-3xl md:text-4xl font-bold font-headline tracking-tight text-primary mb-6 text-center ${className}`}
  >
    {children}
  </h2>
);

const BusinessHours = () => (
  <div className="text-left text-sm space-y-2 p-4 border border-primary/20 rounded-lg bg-secondary/50 text-primary">
    <div className="flex justify-between">
      <span>Sunday</span>
      <span>11:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Monday</span>
      <span>11:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Tuesday</span>
      <span>11:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Wednesday</span>
      <span>11:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Thursday</span>
      <span>11:00 AM - 5:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Friday</span>
      <span>11:00 AM - 4:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Saturday</span>
      <span>11:00 AM - 5:00 PM</span>
    </div>
  </div>
);

// --- Main HomeMobile Component ---

export function HomeMobile() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/images/back-2.jpg"
          alt="Elegant Indian bridal portrait"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative z-20 p-4 max-w-2xl">
          <h1 className="text-4xl font-extrabold font-headline leading-tight tracking-tighter mb-6">
            Wear the story of your heritage — a living tradition
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the harmony of classic couture and contemporary grace.
            Handcrafted with love, for your most memorable day.
          </p>
          <div className="mt-10 flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="flex items-center justify-center h-12 px-8 text-lg w-full sm:w-auto bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Book Consultation
            </a>
            <a
              href="#collections"
              className="flex items-center justify-center h-12 px-8 text-lg w-full sm:w-auto border border-white text-white bg-black/20 backdrop-blur-sm rounded-md hover:bg-white hover:text-primary transition-colors"
            >
              View Collections
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedStatsSection />

      {/* Collections Section */}
      <section id="collections" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedHeading>EXPLORE OUR STORE</AnimatedHeading>
            <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
              At Dulhan Exclusives, we believe every bride deserves a regal
              entrance. Our collections are an homage to the timeless legacy of
              bridal couture, meticulously reimagined for the grace and spirit
              of the contemporary woman.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="group relative w-full max-w-xs h-96 cursor-pointer rounded-lg [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(5deg)] transition-transform duration-700">
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-lg font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Bridal Collection
              </h3>
            </div>
            {/* Card 2 */}
            <div className="group relative w-full max-w-xs h-96 cursor-pointer rounded-lg [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)] transition-transform duration-700">
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-lg font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Wedding Wear
              </h3>
            </div>
            {/* Card 3 */}
            <div className="group relative w-full max-w-xs h-96 cursor-pointer rounded-lg [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(5deg)] transition-transform duration-700">
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-lg font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Designer Pieces
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-secondary/30 text-primary-foreground"
      >
        <div className="container w-full mx-auto px-4 border-2 border-primary p-6 rounded-lg bg-secondary shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight mb-4 text-primary">
              Get In Touch
            </h2>
            <p className="mx-auto text-base leading-relaxed opacity-90 text-primary">
              Ready to start your bridal journey? Contact us today to schedule
              your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Appointment Information
              </h3>
              <div className="space-y-4 text-base text-primary">
                <p>
                  Our expert stylists are here to help you find the perfect
                  bridal ensemble. Book a personalized consultation to discuss
                  your vision, preferences, and requirements.
                </p>
                <BusinessHours />
                <a
                  href="tel:+61411106106"
                  className="mt-4 flex items-center justify-center w-full lg:w-auto h-14 text-lg bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +61 411 106 106
                </a>
              </div>
            </div>

            {/* Our Address */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Our Address
              </h3>
              <div className="space-y-4 text-base">
                <p className="text-primary">
                  Visit our showroom in Liverpool, NSW.
                </p>
                <div className="relative mb-2">
                  <div className="w-full h-64 rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d150.925!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShop+1%2F240+George+St%2C+Liverpool+NSW+2170%2C+Australia!5e0!3m2!1sen!2sau!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dulhan Exclusives Showroom Location"
                    ></iframe>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Shop 1/240 George St, Liverpool NSW 2170</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeMobile;