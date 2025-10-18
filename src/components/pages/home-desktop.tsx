import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import Image from "next/image";
import Link from "next/link";
import { RotatingLehenga } from "../ui/rotating-lehanga";
import { AnimatedStatsSection } from "../ui/animatedStatSection";
import { AnimatedHeading } from "../ui/animationCard";
import { BusinessHours } from "../ui/businessHours";

export function HomeDesktop() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Brides" },
    { icon: Star, value: "4.9", label: "Customer Rating" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Shirt, value: "2k+", label: "Collections" },
    { icon: MapPin, value: "100+", label: "Designs" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/back-2.jpg"
          alt="Elegant Indian bridal portrait with traditional jewelry"
          data-ai-hint="indian bride jewelry"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="relative z-10 p-8 max-w-6xl">
          <h1 className="text-4xl font-extrabold font-headline leading-tight tracking-tighter mb-6  ">
            Wear the story of your heritage — a living tradition
            <span className="text-primary">
              <RotatingLehenga />
            </span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the harmony of classic couture and contemporary grace.
            Handcrafted with love, for your most memorable day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-xl w-fit sm:w-auto"
            >
              <Link href="#about">Book Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-xl border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto bg-black/20 backdrop-blur-sm shadow-lg"
            >
              <Link href="#collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-5 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <stat.icon className="h-16 w-16 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-xl text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <AnimatedStatsSection />

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">
              {" "}
              EXPLORE OUR STORE
            </h2> */}
            <AnimatedHeading className="text-4xl font-bold font-headline tracking-tight text-primary mb-6 item-center">
              EXPLORE OUR STORE
            </AnimatedHeading>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              At Dulhan Exclusives, we believe every bride deserves a regal
              entrance. Our collections are an homage to the timeless legacy of
              bridal couture, meticulously reimagined for the grace and spirit
              of the contemporary woman.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 justify-items-center">
            <div
              className="group relative w-[270px] h-[360px] cursor-pointer rounded-lg
                           transition-transform duration-700 
                           [transform-style:preserve-3d] 
                           hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(5deg)]"
            >
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Bridal Collection
              </h3>
            </div>
            <div className="group relative w-[15rem] h-[20rem] cursor-pointer  rounded-lg items-center">
              {/* The background image with its own 3D transform on hover */}
              <div
                className="absolute inset-0  bg-cover bg-center shadow-xl transition-transform duration-1000 group-hover:[transform:perspective(40px)_rotateX(1deg)_translateY(60px)] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>

              {/* The main image/element that moves up */}
              <div
                className="absolute h-full w-full bg-contain bg-no-repeat transition-transform duration-1000 group-hover:[transform:translateY(-60px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>

              {/* Gradient overlay for text readability on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3  item-center bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* The heading that appears from the bottom on hover */}
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                Bridal Collection
              </h3>
            </div>
            <div
              className="group relative w-[270px] h-[360px] cursor-pointer rounded-lg
                           transition-transform duration-700 
                           [transform-style:preserve-3d] 
                           hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)]"
            >
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Bridal Collection
              </h3>
            </div>
            <div
              className="group relative w-[270px] h-[360px] cursor-pointer rounded-lg
                           transition-transform duration-700 
                           [transform-style:preserve-3d] 
                           hover:[transform:perspective(1000px)_rotateY(10deg)_rotateX(5deg)]"
            >
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Bridal Collection
              </h3>
            </div>
            <div className="group relative w-[15rem] h-[20rem] cursor-pointer  rounded-lg items-center">
              {/* The background image with its own 3D transform on hover */}
              <div
                className="absolute inset-0  bg-cover bg-center shadow-xl transition-transform duration-1000 group-hover:[transform:perspective(40px)_rotateX(1deg)_translateY(60px)] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>

              {/* The main image/element that moves up */}
              <div
                className="absolute h-full w-full bg-contain bg-no-repeat transition-transform duration-1000 group-hover:[transform:translateY(-60px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>

              {/* Gradient overlay for text readability on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3  item-center bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* The heading that appears from the bottom on hover */}
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                Bridal Collection
              </h3>
            </div>
            <div
              className="group relative w-[270px] h-[360px] cursor-pointer rounded-lg
                           transition-transform duration-700 
                           [transform-style:preserve-3d] 
                           hover:[transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)]"
            >
              <div
                className="absolute inset-0 h-full w-full rounded-lg bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: "url('images/background.jpg')" }}
              ></div>
              <div
                className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat [transform:translateZ(30px)]"
                style={{ backgroundImage: "url('images/free-photo.png')" }}
              ></div>
              <h3 className="absolute bottom-5 left-0 right-0 text-primary bg-secondary/80 text-xl font-semibold text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 [transform:translateZ(50px)]">
                Bridal Collection
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* New Extended Collections Section */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-secondary/30 text-primary-foreground hover:shadow-xl"
      >
        <div className="container w-full h-full mx-auto px-8 border-2 border-primary p-4 rounded-lg bg-secondary shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight mb-6 text-primary">
              Get In Touch
            </h2>
            <p className="max-w-4xl mx-auto text-xl leading-relaxed opacity-90 text-primary">
              Ready to start your bridal journey? Contact us today to schedule
              your consultation and discover the perfect ensemble for your
              special day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Appointment Information
              </h3>
              <div className="space-y-4 text-lg text-primary">
                <p>
                  Our expert stylists are here to help you find the perfect
                  bridal ensemble. Book a personalized consultation to discuss
                  your vision, preferences, and requirements.
                </p>
                <BusinessHours />
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-secondary w-full lg:w-auto h-14 text-lg bg-primary hover:bg-secondary/80 hover:text-primary"
                >
                  <Link href="tel:+61411106106">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +61 411 106 106
                  </Link>
                </Button>
              </div>
            </div>

            {/* Our Address */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Our Address
              </h3>
              <div className="space-y-4 text-lg">
                <p className="text-primary">
                  Visit our showroom in Liverpool, NSW.
                </p>
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
                  <span className="flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5 text-primary" />
                    Shop 1/240 George St
                  </span>
                </div>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <Link
                    href="tel:+61411106106"
                    className="text-primary transition-colors"
                  >
                    +61 411 106 106
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary mb-6">Visit Our Showroom</h2>
            <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Experience our bridal collections in person at our beautiful showroom. Located in the heart of Liverpool, NSW, our showroom offers a warm and welcoming environment where you can explore our designs and receive personalized consultation.
            </p>
          </div>
          
          
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d150.925!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShop+1%2F240+George+St%2C+Liverpool+NSW+2170%2C+Australia!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dulhan Exclusives Showroom Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 text-lg">
                <Link 
                  href="https://maps.google.com/?q=Shop+1/240+George+St,+Liverpool+NSW+2170,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-14 text-lg">
                <Link href="tel:+61411106106">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Directions
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Interactive map showing our showroom location</p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>📍</span>
                <span>Free parking available</span>
                <span>•</span>
                <span>Near Liverpool Station</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
