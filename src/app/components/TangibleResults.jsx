"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TangibleResults() {
  return (
    <section className="w-full bg-[#EEF4FF] py-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <h2 className="max-w-xl text-3xl font-semibold text-gray-900 md:text-4xl">
            See tangible results
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-gray-600">
            Over the years we’ve created a unique process that delivers
            exceptional results with blazing-fast efficiency.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              value: "40%",
              text: "growth in international & GCC orders for a global retailer",
            },
            {
              value: "5.0",
              text: "app rating on App Store for a major sports ecommerce platform",
            },
            {
              value: "60%",
              text: "more user engagement with hyper-personalization for a US proptech",
            },
            {
              value: "21%",
              text: "higher conversion for a top global marketplace",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-4xl font-medium text-gray-900">
                {card.value}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
