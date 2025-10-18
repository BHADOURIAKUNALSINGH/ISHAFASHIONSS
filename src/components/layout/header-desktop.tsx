// 'use client';
// import Link from 'next/link';
// import { Logo } from '@/components/logo';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Phone } from 'lucide-react';

// export function HeaderDesktop() {
//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '#collections', label: 'Collections' },
//     { href: '#about', label: 'About' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   return (
//     <header className="top-0 z-40 w-full backdrop-blur-md border-b shadow-sm">
//       <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-8">
//         <div className="flex items-left space-x-0">
//           <Logo />
//         </div>
        
//         <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-foreground/80 hover:text-primary transition-colors font-semibold text-base relative group"
//             >
//               {link.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>
        
//         <div className="flex items-center space-x-4">
//           <Button asChild variant="ghost" size="sm" className="hidden lg:flex items-center gap-2">
//             <Link href="tel:+61411106106">
//               <Phone className="h-4 w-4" />
//               +61 411 106 106
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
// Import new icons from lucide-react
import { Search, Heart, User, ShoppingBag, ChevronDown, Phone } from 'lucide-react';
import { useState } from 'react';
import BusinessHours from '../ui/businessHours';

const navLinks = [
  {
    href: '/bridal-collection',
    label: "BRIDAL COLLECTION",
megaMenu: {
      image: {
        src: 'https://placehold.co/400x300/c77979/white?text=Bridal',
        alt: 'Bridal Collection',
      },
      columns: [
        {
          heading: 'By Type',
          links: [
            { href: '/bridal-collection/lehengas', label: 'Bridal Lehengas' },
            { href: '/bridal-collection/sarees', label: 'Bridal Sarees' },
            { href: '/bridal-collection/gowns', label: 'Reception Gowns' },
          ],
        },
        {
          heading: 'By Ceremony',
          links: [
            { href: '/bridal-collection/engagement', label: 'Engagement' },
            { href: '/bridal-collection/haldi', label: 'Haldi & Mehendi' },
            { href: '/bridal-collection/sangeet', label: 'Sangeet Night' },
          ],
        },
      ],
    },
  },
  {
    href: '/wedding-wears',
    label: 'WEDDING WEARS',
    // Example mega menu for "WEDDING WEARS"
    megaMenu: {
      image: {
        src: 'https://placehold.co/400x300/9d2526/white?text=Wedding+Wears', // Placeholder image
        alt: 'Woman in a festive suit set',
      },
      columns: [
        {
          heading: 'Category',
          links: [
            { href: '/wedding-wears/all', label: 'Shop All' },
            { href: '/wedding-wears/lehengas', label: 'Lehengas & Skirt Sets' },
            { href: '/wedding-wears/anarkali', label: 'Anarkali Suit Sets' },
            { href: '/wedding-wears/sharara', label: 'Sharara Sets' },
            { href: '/wedding-wears/gowns', label: 'Gowns & Dresses' },
          ],
        },
        {
          heading: 'Collection',
          links: [
            { href: '/collections/all', label: 'Shop All' },
            { href: '/collections/sangeet', label: 'Sangeet Styles' },
            { href: '/collections/reception', label: 'Reception Ready' },
            { href: '/collections/mehendi', label: 'Mehendi Brights' },
          ],
        },
      ],
    },
  },
  { href: '/designer-pieces', label: 'DESIGNER PIECES' },
  { href: '/fashion-collection', label: 'FASHION COLLECTION' },
  { href: '/exclusive-designs', label: 'EXCLUSIVE DESIGNS' },
  { href: '/dress-material', label: 'DRESS MATERIAL' },
  { href: '/jewellery', label: 'JEWELLERY' },
  { href: '/accessories', label: 'ACCESSORIES' },
  { href: '/fragrances', label: 'FRAGRANCES' },
  { href: '/sale', label: 'SALE', highlighted: true },
];


export function HeaderDesktop() {
  // Updated navigation links to match the image
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    // 'group' class enables the hover effect on the entire header
    // hover:bg-amber-50 provides the beige background on hover.
    // You can replace 'amber-50' with your specific beige color from tailwind.config.js
    <header className=" fixed top-0 z-40 w-full group border-b transition-colors duration-300 hover:bg-secondary">
      <div className="bg-yellow-400 text-sm text-center text-black font-semibold py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-8">GET AWSOME DEALS ON BRIDAL COLLECTION!!!</span>
          <span className="mx-8">ALL ITEMS FOR DULHAN AT ONE PLACE!!!</span>
          <span className="mx-8">GET OFFERS ON STORE VISIT!!!</span>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Row: Logo, Search, and Icons */}
        <div className="flex h-18 items-center justify-between">
          {/* Left Section: Logo and Ship to */}
          <div className="flex items-center gap-x-3">
            <Logo />
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-1 px-8">
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search kurtas, shirts and dupattas"
                className="w-full rounded-md border border-gray-300 bg-gray-50 py-2.5 pl-12 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Section: User Icons */}
          <div className="flex items-center gap-x-3 text-white group-hover:text-black transition-colors duration-300">
            <Heart className="h-6 w-6 cursor-pointer hover:text-primary" />
            <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
            <User className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
             <Link href="tel:+61411106106">
                    <Phone className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                  </Link>
            
          </div>
        </div>
        
        {/* Bottom Row: Navigation Links */}
        <nav className="relative hidden lg:flex h-12 items-center justify-center space-x-4 text-xs font-medium "
          onMouseLeave={() => setOpenMenu(null)}
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="py-2"
              // FIX: Only set menu if it exists, don't set null here
              onMouseEnter={() => {
                if (link.megaMenu) {
                  setOpenMenu(link.label);
                }
              }}
            >
              <a
                href={link.href}
                className={`
                  relative transition-colors whitespace-nowrap
                  ${
                    link.highlighted
                      ? 'bg-[#9D2526] text-white px-3 py-1.5 rounded-sm font-bold'
                      : 'text-white hover:text-primary hover:underline underline-offset-4 group-hover:text-black'
                  }
                `}
              >
                {link.label}
              </a>
            </div>
          ))}

          {/* Render the Mega Menu Dropdown */}
          {navLinks.map((link) =>
            link.megaMenu && openMenu === link.label ? (
              <div
                key={`${link.label}-menu`}
                className="absolute top-full left-0 right-0 w-content bg-[#F7EEE5] shadow-lg border-t border-gray-200"
              >
                <div className="container mx-auto grid grid-cols-4 gap-x-8 px-6 py-8">
                  {/* Link Columns */}
                  {link.megaMenu.columns.map((column) => (
                    <div key={column.heading} className="flex flex-col space-y-3">
                      <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                        {column.heading}
                      </h3>
                      {column.links.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.href}
                          className="text-sm text-gray-800 hover:text-[#9D2526] transition-colors"
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </div>
                  ))}
                  
                  {/* Image Column */}
                  <div className="relative h-full min-h-[200px] ">
                    <img
                      src="/images/single.jpg"
                      alt={link.megaMenu.image.alt}
                      className="absolute inset-0 w-1/2 h-full object-fit-cover rounded-md"
                    />
                    {/* <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm p-3 rounded-md">
                      <p className="font-semibold text-white">
                        {link.megaMenu.image.text}
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </nav>
      </div>
    </header>
  );
}