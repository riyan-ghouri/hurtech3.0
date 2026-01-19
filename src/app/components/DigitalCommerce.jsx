"use client";

import { motion } from "framer-motion";
import {
  Layers,
  PencilRuler,
  Code2,
  Wrench,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    step: "01",
    title: "Ideation",
    description:
      "Rapid prototyping, research & development, user insights & testing",
    icon: Layers,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Product design, UX & UI design, design system development",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Web development, mobile development, AI & GenAI, MVPs, cloud",
    icon: Code2,
  },
  {
    step: "04",
    title: "Maintenance",
    description:
      "QA, product management, end to end software maintenance",
    icon: Wrench,
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Product scaling, optimization, performance & growth discovery",
    icon: RotateCcw,
  },
];

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconAnim = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function DigitalCommerce() {
  return (
    <section id="processes" className="w-full scroll-mt-20 bg-white py-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <h2 className="max-w-2xl text-3xl font-semibold text-gray-900 md:text-4xl">
            Leverage full digital commerce expertise
          </h2>

          <p className="max-w-md text-[16px] leading-relaxed text-gray-500">
            Whether you want to consult an idea, add missing capabilities,
            quickly expand your team, or hand over a project — we’ve got you
            covered.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {features.map((itemData) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={itemData.step}
                variants={item}
                className="flex flex-col bg-gray-100 p-5 rounded-md items-start gap-3"
              >
                <motion.div
                  variants={iconAnim}
                  className="flex h-12 w-12 items-center  justify-center rounded-lg bg-blue-600"
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>

                <span className="text-sm font-semibold text-gray-400">
                  {itemData.step}
                </span>

                <h3 className="text-xl font-semibold text-gray-900">
                  {itemData.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {itemData.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
