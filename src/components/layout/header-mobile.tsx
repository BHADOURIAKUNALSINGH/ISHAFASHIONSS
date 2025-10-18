"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Phone,
} from "lucide-react";

// A placeholder Logo component. The text color is now set to primary.
const Logo = () => (
  <a href="/" aria-label="Home">
    <div className="flex flex-col leading-tight items-end">
      <span className="text-xl font-bold tracking-tight text-primary">
        Dulhan Exclusives
      </span>
      <span className="text-base font-medium text-primary italic">
        by Isha Fashions
      </span>
    </div>
  </a>
);

// Navigation data structure from your desktop header
const navLinks = [
  {
    href: "/bridal-collection",
    label: "BRIDAL COLLECTION",
    megaMenu: {
      columns: [
        {
          heading: "By Type",
          links: [
            { href: "#", label: "Lehengas" },
            { href: "#", label: "Sarees" },
          ],
        },
      ],
    },
  },
  {
    href: "/wedding-wears",
    label: "WEDDING WEARS",
    megaMenu: {
      columns: [
        {
          heading: "Category",
          links: [
            { href: "#", label: "Shop All" },
            { href: "#", label: "Anarkali" },
          ],
        },
      ],
    },
  },
  {
    href: "/designer-pieces",
    label: "DESIGNER PIECES",
    megaMenu: {
      columns: [
        { heading: "Featured", links: [{ href: "#", label: "Latest" }] },
      ],
    },
  },
  { href: "/fashion-collection", label: "FASHION COLLECTION" },
  { href: "/exclusive-designs", label: "EXCLUSIVE DESIGNS" },
  { href: "/dress-material", label: "DRESS MATERIAL" },
  {
    href: "/jewellery",
    label: "JEWELLERY",
    megaMenu: {
      columns: [
        { heading: "By Type", links: [{ href: "#", label: "Necklaces" }] },
      ],
    },
  },
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/fragrances", label: "FRAGRANCES" },
  { href: "/sale", label: "SALE", highlighted: true },
];

export function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent group">
      <div className="bg-yellow-400 text-sm text-center text-black font-semibold py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-8">
            GET AWESOME DEALS ON BRIDAL COLLECTION!!!
          </span>
        </div>
      </div>
      <div className="transition-colors duration-300 bg-white group-hover:bg-[#F7EEE5] shadow-sm">
        <div className="container relative mx-auto px-4 flex h-16 items-center justify-between">
          {/* Left Section: Menu and Search */}
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6 text-primary" />
            </button>
            <Search className="h-6 w-6 text-primary" />
          </div>

          {/* Center Section: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center text-xs">
            
              {/* Add items-end to right-align the text */}
              <div className="flex flex-col leading-tight items-end">
                <span className="text-[18px] font-bold tracking-tight font-headline text-primary">
                  Dulhan Exclusives
                </span>
                {/* Remove the pl-14, it's no longer needed */}
                <span className="text-xs font-medium text-primary italic">
                  by Isha Fashions
                </span>
              </div>
            
          </div>

          {/* Right Section: Call and User */}
          <div className="flex items-center gap-2">
            <a href="tel:+61411106106" aria-label="Call Us">
              <Phone className="h-6 w-6 text-primary" />
            </a>
            <User className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Side Navigation Panel */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Menu Content */}
        <div
          className={`relative h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-x-3">
              <Heart className="h-6 w-6 cursor-pointer text-gray-700" />
              <User className="h-6 w-6 cursor-pointer text-gray-700" />
              <ShoppingBag className="h-6 w-6 cursor-pointer text-gray-700" />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b">
                <div
                  className={`flex justify-between items-center p-4 w-full text-left ${
                    link.highlighted ? "bg-[#9D2526] text-white" : ""
                  }`}
                  onClick={() =>
                    link.megaMenu
                      ? toggleAccordion(link.label)
                      : setIsMenuOpen(false)
                  }
                >
                  <a
                    href={link.megaMenu ? undefined : link.href}
                    className="flex-grow"
                  >
                    {link.label}
                  </a>
                  {link.megaMenu &&
                    (openAccordion === link.label ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    ))}
                </div>
                {link.megaMenu && openAccordion === link.label && (
                  <div className="pl-6 bg-gray-50">
                    {link.megaMenu.columns.map((col) =>
                      col.links.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.href}
                          className="block p-3 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subLink.label}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4 space-y-2 text-sm text-gray-600">
            <a href="#" className="block">
              Track Order
            </a>
            <a href="#" className="block">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
