import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone, Star, Users, Award, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeTablet() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Brides' },
    { icon: Star, value: '4.9', label: 'Customer Rating' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/free-photo-of-elegant-indian-bridal-portrait-with-jewelry.jpeg"
          alt="Elegant Indian bridal portrait with traditional jewelry"
          data-ai-hint="indian bride jewelry"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-20 p-8 max-w-4xl">
          <h1 className="text-5xl font-bold font-headline leading-tight tracking-tight mb-6">
            Where Dreams are Woven in Silk & Gold
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover exquisite bridal wear that celebrates your unique story. Handcrafted with love, for your most memorable day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-primary hover:bg-primary/90">
              <Link href="#contact">
                Contact Us <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
              <Link href="#collections">
                View Collections
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary mb-6">Timeless Elegance, Modern Grace</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Dulhan Exclusives, we believe every bride deserves to feel like royalty. Our collections are a tribute to the rich heritage of bridal couture.
            </p>
          </div>
          {/* Horizontal Scrollable Image Gallery for Tablet */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {/* Image 1 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/free-photo-of-elegant-traditional-indian-bridal-portrait.jpeg" 
                    alt="Elegant traditional Indian bridal portrait" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="traditional bridal portrait"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Bridal Collection</h3>
              </div>

              {/* Image 2 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/Two-Bridal-Indian-Models-with-Traditional-Dress-and-Jewelry-23043-pixahive.jpg" 
                    alt="Two bridal Indian models with traditional dress and jewelry" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="bridal models traditional dress"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Wedding Wear</h3>
              </div>

              {/* Image 3 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/unnamed.webp" 
                    alt="Bridal outfit fabric" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="wedding dress fabric"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Designer Pieces</h3>
              </div>

              {/* Image 4 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/2024-04-15.webp" 
                    alt="Bridal fashion collection" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="bridal fashion collection"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Fashion Collection</h3>
              </div>

              {/* Image 5 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/2024-09-09.webp" 
                    alt="Exclusive bridal designs" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="exclusive bridal designs"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Exclusive Designs</h3>
              </div>

              {/* Image 6 */}
              <div className="group cursor-pointer flex-shrink-0" style={{ width: '280px' }}>
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <Image 
                    src="/images/Screenshot 2022-12-29 at 6.06.10 am.webp" 
                    alt="Bridal jewelry and accessories" 
                    width={600}
                    height={800}
                    className="object-cover aspect-[3/4] w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="bridal jewelry accessories"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">Jewelry & Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Extended Collections Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary mb-6">Discover Our Latest Creations</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From runway glamour to exclusive designer pieces, explore our newest collections that blend contemporary trends with timeless Indian elegance. Each piece tells a story of craftsmanship and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-primary mb-6">Visit Our Showroom</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We invite you to experience the world of Dulhan Exclusives in person. Our expert stylists are here to help you find the perfect bridal ensemble.
            </p>
          </div>
          
          {/* Simple Social Media */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              <Link 
                href="https://www.facebook.com/p/Isha-Fashions-Sydney-100089806684908/"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-7 w-7" />
              </Link>
              <Link 
                href="https://www.instagram.com/dulhanexclusivesbyisha/"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-7 w-7" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@dulhanexclusivesbyisha"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Follow us on TikTok"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg text-gray-800">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Shop 1/240 George St, Liverpool NSW 2170, Australia</p>
                <p className="text-gray-600 mt-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <Link href="tel:+61411106106" className="hover:text-primary transition-colors">
                    +61 411 106 106
                  </Link>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg text-gray-800">
                  <div className="w-6 h-6 text-primary flex items-center justify-center">🕐</div>
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mon-Fri</span>
                    <span>11:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline tracking-tight mb-6">Get In Touch</h2>
            <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
              Ready to start your bridal journey? Contact us today to schedule your consultation.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <Button asChild size="lg" variant="secondary" className="text-primary w-full h-14 text-lg">
                <Link href="tel:+61411106106">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +61 411 106 106
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Visit Our Showroom</h3>
              <p className="text-base opacity-90 mb-3">
                Experience our collections in person at our beautiful showroom in Liverpool, NSW.
              </p>
              <div className="space-y-1 text-base opacity-90">
                <p>Shop 1/240 George St</p>
                <p>Liverpool NSW 2170, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 