"use client";

import { motion } from "framer-motion";

export default function TechSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto px-6 py-4 rounded-md bg-white max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Lets grow your business together!
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            We transform your digital brand with our custom web and mobile app
            development. From sleek websites to intuitive mobile apps, we craft
            unique, engaging digital experiences that captivate your audience
            and drive business.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid gap-12">
          {/* Health Tech */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-gray-900">
                Health tech!
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Since 2023, our world-leading design team has helped visionary
                entrepreneurs and product leaders innovate their products and
                services to add impact and customer value. We empower.
              </p>
              <button className="mt-5 rounded-md cursor-pointer border border-gray-300 px-5 text-gray-600 py-3 text-sm bg-white font-medium hover:bg-gray-100 transition">
                Explore health tech
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                alt="Health tech"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Education Tech */}
          <div className="grid items-center gap-8 md:grid-cols-2 md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                alt="Education tech"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl font-semibold text-gray-900">
                Education tech!
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Since 2023, our world-leading design team has helped visionary
                entrepreneurs and product leaders innovate their products and
                services to add impact and customer value. We empower.
              </p>
              <button className="mt-5 rounded-md border border-gray-300 text-gray-600 cursor-pointer bg-white px-5 py-3 text-sm  font-medium hover:bg-gray-100 transition">
                Explore education tech
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
