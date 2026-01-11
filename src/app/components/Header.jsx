"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  const industryContent = {
    healthcare: {
      title: "Healthcare",
      desc: "Studying the customer’s business process to develop bespoke marketplace and e-commerce solutions.",
      image: "/doctor.png",
    },
    education: {
      title: "Education",
      desc: "Building scalable education marketplaces and digital learning commerce platforms.",
      image: "/tech.png",
    },
  };

  return (
    <header className="w-full bg-white relative z-50">
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img src="/hurtech.svg" alt="Logo" className="h-8" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

            <Link href="#" className="hover:text-blue-600">Services</Link>
            <Link href="#" className="hover:text-blue-600">Processes</Link>

            {/* ===== INDUSTRIES (CLICK BASED) ===== */}
            <div className="relative">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="hover:text-blue-600"
              >
                Industries
              </button>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute -left-52 top-full mt-4"
                  >
                    <div className="flex w-225 rounded-xl bg-white shadow-2xl border border-gray-300 overflow-hidden">

                      {/* LEFT PANEL */}
                      <div className="w-1/3 bg-gray-50 p-6 space-y-6">
                        <div
                          onMouseEnter={() => setActiveIndustry("healthcare")}
                          className={`rounded-lg border p-4 cursor-pointer ${
                            activeIndustry === "healthcare"
                              ? "bg-blue-50 border-blue-200"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          <h4 className="font-semibold text-gray-900">
                            Healthcare
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Aligning custom-built marketplace and e-commerce software.
                          </p>
                        </div>

                        <div
                          onMouseEnter={() => setActiveIndustry("education")}
                          className={`rounded-lg border p-4 cursor-pointer ${
                            activeIndustry === "education"
                              ? "bg-blue-50 border-blue-200"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          <h4 className="font-semibold text-gray-900">
                            Education
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Aligning custom-built marketplace and e-commerce.
                          </p>
                        </div>
                      </div>

                      {/* RIGHT PANEL */}
                      <div className="w-2/3 p-6">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndustry}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {industryContent[activeIndustry].title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                              {industryContent[activeIndustry].desc}
                            </p>

                            <img
                              src={industryContent[activeIndustry].image}
                              alt={industryContent[activeIndustry].title}
                              className="w-full h-70 object-cover rounded-lg"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#" className="hover:text-blue-600">Testimonials</Link>
            <Link href="#" className="hover:text-blue-600">About Us</Link>
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown />
            <button className="bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Get in touch →
            </button>
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
          <Link href="#" className="block text-gray-700">Services</Link>
          <Link href="#" className="block text-gray-700">Processes</Link>

          <div className="space-y-3">
            <button className="w-full rounded-lg border px-4 py-3 text-left font-medium">
              Healthcare
            </button>
            <button className="w-full rounded-lg border px-4 py-3 text-left font-medium">
              Education
            </button>
          </div>

          <Link href="#" className="block text-gray-700">Testimonials</Link>
          <Link href="#" className="block text-gray-700">About Us</Link>

          <LanguageDropdown />

          <button className="w-full bg-blue-600 px-4 py-3 text-white font-semibold rounded-lg">
            Get in touch →
          </button>
        </div>
      )}
    </header>
  );
}
