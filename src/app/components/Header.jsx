"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";


export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
      { name: "Services", href: "#" },
      { name: "Processes", href: "#" },
      { name: "Industries", href: "#" },
      { name: "Testimonials", href: "#" },
      { name: "About Us", href: "#" },
  ];

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <img src="./hurtech.svg"  alt="" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
           <LanguageDropdown />

            <button className="rounded-sm bg-blue-600 px-4 py-3 cursor-pointer text-sm font-semibold text-white hover:bg-blue-700 transition">
              Get in touch →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col gap-4 px-4 py-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <LanguageDropdown />
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold">
              Get in touch →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
