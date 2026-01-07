"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text:
      "Before purchasing advance testimonials products I spent time finding the best in the market — and this one stood out. The features go far beyond anything else available.",
    name: "Gabriel Carreras",
    site: "GabrielCarreras.com",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    text:
      "An exceptionally polished product. Clean UI, powerful features, and excellent support. It genuinely helped improve credibility and conversions.",
    name: "Sarah Mitchell",
    site: "sarahmitchell.io",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
];

export default function ClientTestimonial() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-white py-15">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-xl font-semibold text-gray-900"
        >
          Check our clients' words
        </motion.h2>

        {/* Testimonial */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-gray-400 transition hover:text-gray-700"
          >
            ←
          </button>

          {/* Animated Text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700"
            >
              “{testimonials[index].text}”
            </motion.p>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-3 text-gray-400 transition hover:text-gray-700"
          >
            →
          </button>
        </div>

        {/* Author */}
        <motion.div
          key={index + "-author"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <img
            src={testimonials[index].avatar}
            alt={testimonials[index].name}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">
              {testimonials[index].name}
            </p>
            <p className="text-xs text-gray-400">
              {testimonials[index].site}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
