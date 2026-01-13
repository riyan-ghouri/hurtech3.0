"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";




export default function DigitalHealthFAQ({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);
   const router = usePathname()
  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
               {router == "/education" ? "EdTech solutions FAQ" : 'Digital Health FAQ'}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-600">
              Get clear answers to common questions about digital health
              solutions, patient engagement technologies, and digital
              transformation in healthcare.
            </p>
          </motion.div>

          {/* Right FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ layout: { duration: 0.35, ease: "easeOut" } }}
                  className="rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-5 text-sm leading-relaxed text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
