"use client";

import React, { useState } from "react";
import { Search, Heart, User, ShoppingBag, Phone } from "lucide-react";

// A placeholder Logo component. Adjusted font size for better fit on tablets.
const Logo = () => (
  <a href="/" aria-label="Home">
    <div className="flex flex-col leading-tight items-end">
      <span className="text-lg font-bold tracking-tight text-white group-hover:text-black transition-colors duration-300">
        Dulhan Exclusives
      </span>
      <span className="text-sm font-medium text-white group-hover:text-black transition-colors duration-300 italic">
        by Isha Fashions
      </span>
    </div>
  </a>
);

// Navigation data structure
const navLinks = [
  {
    href: "/bridal-collection",
    label: "BRIDAL COLLECTION",
    megaMenu: {
      image: {
        src: "https://placehold.co/400x300/c77979/white?text=Bridal",
        alt: "Bridal Collection",
        text: "Exquisite Bridal Wear",
      },
      columns: [
        {
          heading: "By Type",
          links: [
            { href: "/bridal-collection/lehengas", label: "Bridal Lehengas" },
            { href: "/bridal-collection/sarees", label: "Bridal Sarees" },
            { href: "/bridal-collection/gowns", label: "Reception Gowns" },
          ],
        },
        {
          heading: "By Ceremony",
          links: [
            { href: "/bridal-collection/engagement", label: "Engagement" },
            { href: "/bridal-collection/haldi", label: "Haldi & Mehendi" },
            { href: "/bridal-collection/sangeet", label: "Sangeet Night" },
          ],
        },
      ],
    },
  },
  {
    href: "/wedding-wears",
    label: "WEDDING WEARS",
    megaMenu: {
      image: {
        src: "https://placehold.co/400x300/9d2526/white?text=Wedding+Wears",
        alt: "Woman in a festive suit set",
        text: "Elegant Suit Sets",
      },
      columns: [
        {
          heading: "Category",
          links: [
            { href: "/wedding-wears/all", label: "Shop All" },
            { href: "/wedding-wears/lehengas", label: "Lehengas & Skirt Sets" },
            { href: "/wedding-wears/anarkali", label: "Anarkali Suit Sets" },
          ],
        },
        {
          heading: "Collection",
          links: [
            { href: "/collections/sangeet", label: "Sangeet Styles" },
            { href: "/collections/reception", label: "Reception Ready" },
          ],
        },
      ],
    },
  },
  { href: "/designer-pieces", label: "DESIGNER PIECES" },
  { href: "/fashion-collection", label: "FASHION COLLECTION" },
  { href: "/exclusive-designs", label: "EXCLUSIVE DESIGNS" },
  { href: "/dress-material", label: "DRESS MATERIAL" },
  { href: "/jewellery", label: "JEWELLERY" },
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/fragrances", label: "FRAGRANCES" },
  { href: "/sale", label: "SALE", highlighted: true },
];

export function HeaderTablet() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const activeMenuLink = navLinks.find(
    (link) => link.megaMenu && openMenu === link.label
  );

  return (
    // 👇 Only show on tablets (hidden on mobile & desktop)
    <header
      className="hidden sm:block xl:hidden fixed top-0 z-40 w-90 group"
      onMouseLeave={() => setOpenMenu(null)}
    >
      {/* Marquee Banner */}
      <div className="bg-yellow-400 text-sm text-center text-black font-semibold py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-8">
            GET AWESOME DEALS ON BRIDAL COLLECTION!!!
          </span>
          <span className="mx-8">ALL ITEMS FOR DULHAN AT ONE PLACE!!!</span>
          <span className="mx-8">GET OFFERS ON STORE VISIT!!!</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="transition-colors duration-300 group-hover:bg-secondary">
        <div className="container mx-auto px-4">
          {/* Top Row: Logo, Search, Icons */}
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Search Bar */}
            <div className="flex-1 px-4">
              <div className="relative mx-auto max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search our collections"
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-11 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-x-3 text-white group-hover:text-black transition-colors duration-300">
              <Heart className="h-6 w-6 cursor-pointer hover:text-primary" />
              <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-primary" />
              <User className="h-6 w-6 cursor-pointer hover:text-primary" />
              <a href="tel:+61411106106">
                <Phone className="h-6 w-6 cursor-pointer hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Bottom Row: Navigation Links */}
          <nav className="relative flex h-12 items-center justify-center space-x-2 text-[11px] font-medium">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="py-2"
                onMouseEnter={() =>
                  setOpenMenu(link.megaMenu ? link.label : null)
                }
              >
                <a
                  href={link.href}
                  className={`relative transition-colors whitespace-nowrap ${
                    link.highlighted
                      ? "bg-[#9D2526] text-white px-2 py-1 rounded-sm font-bold"
                      : "text-white hover:text-primary hover:underline underline-offset-4 group-hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              </div>
            ))}

            {/* Render the Mega Menu Dropdown */}
            {activeMenuLink?.megaMenu && (
              <div
                key={`${activeMenuLink.label}-menu`}
                className="absolute top-full left-1/2 -translate-x-1/2 bg-[#F7EEE5] shadow-lg border-t border-gray-200 rounded-b-lg p-6"
              >
                <div className="grid grid-flow-col auto-cols-max gap-x-10">
                  {activeMenuLink.megaMenu.columns?.map((column) => (
                    <div
                      key={column.heading}
                      className="flex flex-col space-y-2 whitespace-nowrap"
                    >
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

                  {/* Image Section */}
                  <div className="relative w-[250px] h-[160px]">
                    <img
                      src={activeMenuLink.megaMenu.image?.src}
                      alt={activeMenuLink.megaMenu.image?.alt || ""}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/30 backdrop-blur-sm p-2 rounded-md">
                      <p className="font-semibold text-white text-sm">
                        {activeMenuLink.megaMenu.image?.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderTablet;
