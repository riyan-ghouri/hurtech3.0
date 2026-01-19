"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white border-b border-gray-200  z-50">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img src="/hurtech.svg" alt="Logo" className="md:h-18 h-14" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link
              href="#"
              className="relative text-black hover:text-blue-600
             after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-600
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full"
            >
              Services
            </Link>
            <Link
              href="#processes"
              className="relative text-black hover:text-blue-600
             after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-600
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full"
            >
              Processes
            </Link>

            {/* ===== INDUSTRIES (HOVER DROPDOWN) ===== */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="hover:text-blue-600 cursor-pointer">
                Industries
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-3 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
                  >
                    <Link
                      href="/healthcare"
                      className="block px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      Healthcare
                    </Link>

                    <Link
                      href="/education"
                      className="block px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      Education
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#testimonials"
              className="relative text-black hover:text-blue-600 cursor-pointer
             after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-600
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full"
            >
              Testimonials
            </Link>

           
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown />
            <Link href="#contact" className="bg-blue-600 px-4 py-3 cursor-pointer rounded-lg text-sm font-semibold text-white hover:bg-blue-700">
              Get in touch →
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-6 space-y-4">
          <Link href="/#services" className="block text-gray-700 cursor-pointer">
            Services
          </Link>
          <Link href="#processes" className="block text-gray-700 cursor-pointer">
            Processes
          </Link>

          <div className="space-y-3">
            <button className="w-full rounded-lg border px-4 py-3 text-left font-medium">
              <a href="/healthcare">Healthcare</a>
            </button>
            <button className="w-full rounded-lg border px-4 py-3 text-left font-medium">
              <a href="/education">Education</a>
            </button>
          </div>

          <Link href="#testimonials" className="block text-gray-700">
            Testimonials
          </Link>
          

          <LanguageDropdown />

          <Link href="#contact"  className="w-full bg-blue-600 px-4 py-3 text-white font-semibold rounded-lg">
            Get in touch →
          </Link>
        </div>
      )}
    </header>
  );
}
